
import { olcConsoleGameEngine } from './olct.js';
export class OneLoneCoderFlappyBird extends olcConsoleGameEngine { // Inherit from olcConsoleGameEngine
  constructor(id) {
    super(id)
    this.m_sAppName = "Flappy Bird";
    this.fBirdPosition = 0.0;
    this.fBirdVelocity = 0.0;
    this.fBirdAcceleration = 0.0;
    this.fGravity = 100.0;
    this.fLevelPosition = 0.0;
    this.fSectionWidth = 0;
    this.listSection = [0, 0, 0, 0]; // Initialize with four sections
    this.bHasCollided = false;
    this.bResetGame = false;
    this.nAttemptCount = 0;
    this.nFlapCount = 0;
    this.nMaxFlapCount = 0;
  }

  // Called when the game is created
  OnUserCreate() {
    this.bResetGame = true;
    this.fSectionWidth = this.ScreenWidth() / (this.listSection.length - 1); // Assuming canvas is defined globally
    return true;
  }

  // Called every frame to update the game state
  OnUserUpdate(fElapsedTime) {
    const keys = this.m_keys;
    if (this.bResetGame) {
        this.bHasCollided = false;
        this.bResetGame = false;
        this.listSection = [0, 0, 0, 0];
        this.fBirdAcceleration = 0.0;
        this.fBirdVelocity = 0.0;
        this.fBirdPosition = this.ScreenHeight() / 2.0; // Assuming canvas is defined globally
        this.nFlapCount = 0;
        this.nAttemptCount++;
    }
    this.SetStatus(`Game Engine - ${this.m_sAppName} - FPS: ${(1.0 / fElapsedTime).toFixed(3)}`);
    // Game logic
    if (this.bHasCollided) {
        // console.log(keys.filter(c=>c.bPressed))
        // Do nothing until user releases space
        if (bindings.key||bindings.click) // Assuming keys is an object tracking key states
            this.bResetGame = true;
            bindings.key = false;
            bindings.click = false;
    } else {
        if ( (bindings.key || bindings.click) &&  this.fBirdVelocity >= this.fGravity / 10.0) {
            this.fBirdAcceleration = 0.0;
            this.fBirdVelocity = -this.fGravity / 4.0;
            this.nFlapCount++;
            if (this.nFlapCount > this.nMaxFlapCount)
                this.nMaxFlapCount = this.nFlapCount;
            bindings.key = false
            bindings.click = false
        } else {
            this.fBirdAcceleration += this.fGravity * fElapsedTime;
        }

        if (this.fBirdAcceleration >= this.fGravity)
            this.fBirdAcceleration = this.fGravity;

        this.fBirdVelocity += this.fBirdAcceleration * fElapsedTime;
        this.fBirdPosition += this.fBirdVelocity * fElapsedTime;
        this.fLevelPosition += 14.0 * fElapsedTime;

        if (this.fLevelPosition > this.fSectionWidth) {
            this.fLevelPosition -= this.fSectionWidth;
            this.listSection.shift(); // Remove the first element
            let i = Math.floor(Math.random() * (this.ScreenHeight() - 20));
            if (i <= 10) i = 0;
            this.listSection.push(i); // Add new section height
        }

        // Display
        this.Fill(0, 0, this.ScreenWidth(), this.ScreenHeight(), PIXEL_SOLID, FG_BLACK); // Clear the screen

        // Draw Sections
        for (let nSection = 0; nSection < this.listSection.length; nSection++) {
            const s = this.listSection[nSection];
            if (s !== 0) {
                this.Fill(nSection * this.fSectionWidth + 10 - this.fLevelPosition, this.ScreenHeight() - s,
                    nSection * this.fSectionWidth + 15 - this.fLevelPosition, this.ScreenHeight(), PIXEL_SOLID, 'green');
                this.Fill(nSection * this.fSectionWidth + 10 - this.fLevelPosition, 0,
                    nSection * this.fSectionWidth + 15 - this.fLevelPosition, this.ScreenHeight() - s - 15, PIXEL_SOLID, 'green');
            }
        }

        const nBirdX = Math.floor(this.ScreenWidth() / 3.0);
        // Collision Detection
        this.bHasCollided = this.fBirdPosition < 2 || this.fBirdPosition > this.ScreenHeight() - 2 
          // || m_bufScreen[this.fBirdPosition  * this.ScreenWidth() + nBirdX].color != L' ' ||

        // Draw Bird
        if (this.fBirdVelocity > 0) {
            this.DrawString(nBirdX, this.fBirdPosition + 0, "\\\\\\");
            this.DrawString(nBirdX, this.fBirdPosition + 1, "<\\\\\\=Q");
        } else {
            this.DrawString(nBirdX, this.fBirdPosition + 0, "<///=Q");
            this.DrawString(nBirdX, this.fBirdPosition + 1, "///");
        }

        this.DrawString(1, 3, `Attempt: ${this.nAttemptCount} Score: ${this.nFlapCount} `);
    }

    return true;
  }

}


