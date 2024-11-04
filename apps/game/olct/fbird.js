
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
    this.autoMode = true;
    this.fAccTime = 0;
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
        this.autoMode = true;
        this.fAccTime = 0;
        this.fNextFlapTime = 0;
    }
    this.SetStatus(`Game Engine - ${this.m_sAppName} - FPS: ${(1.0 / fElapsedTime).toFixed(3)}`);
    // Game logic
    this.fAccTime += fElapsedTime;
    this.fNextFlapTime = this.getRandomFlapTime();
    // this.runModel();
    if((bindings.key || bindings.click) && this.autoMode){
        //turning off auto mode
        this.autoMode = false;
    }
    if (this.bHasCollided) {
        // console.log(keys.filter(c=>c.bPressed))
        // Do nothing until user releases space
        if (bindings.key||bindings.click||this.autoMode) {// Assuming keys is an object tracking key states
            this.bResetGame = true;
            bindings.key = false;
            bindings.click = false;
            this.autoMode = true;
        }
    } else {
        // flap logic
        const isFlapping = this.autoMode ? (this.fAccTime > this.fNextFlapTime) : (bindings.key || bindings.click);
        if ( isFlapping &&  this.fBirdVelocity >= this.fGravity / 10.0) {
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
        this.bHasCollided = this.fBirdPosition < 2 
        || this.fBirdPosition > this.ScreenHeight() - 2 
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
  smartFlapTime(index, min, max){
    const range = max - min;
    const part = range / 3;
    const low = min;
    const mid = min + part;
    const high = min + 2 * part;
    let rTime = 0;
    if(index === 0){
        rTime = low + Math.random() * part;
    }else if(index === 1){
        rTime = mid + Math.random() * part;
    }else{
        rTime = high + Math.random() * part;
    }
    return rTime;
  }

  getRandomFlapTime() {
    let effort = this.listSection[3];
    let relaxer = this.listSection[2];

    const choice = Math.random() % 100;

    let rTime  = 0;
    if(choice < 17){
        rTime = 0.98 +  0.1075 * Math.random();
    }else{
        // random no between 1.0875 and 1.1
        rTime = 1.0875 + 0.0125 * Math.random();
    }
    if(effort === 0){
        effort = 1;
    }
    if(relaxer === 0){
        relaxer = 1;
    }
    const h = this.ScreenHeight();
    const b = (effort - this.fBirdPosition) / (0.5*h);
    const d = Math.abs(effort - relaxer) / (0.5*h);
    const c = (h - effort) / h;
    const a = (b + c + d) / 3;
    let t = a * 0.5 + 0.95;
    if(this.fBirdPosition < this.ScreenHeight() /50){
        t += 1500;
    }
    if(this.fBirdPosition < this.ScreenHeight() /40){
        t += 1000;
    }
    if(this.fBirdPosition < this.ScreenHeight() /20){
        t += 500;
    }
    if(this.fBirdPosition < this.ScreenHeight() /10){
        t += 250;
    }
    if(this.fBirdPosition < this.ScreenHeight() /6){
        t += 200;
    }
    if(this.fBirdPosition < this.ScreenHeight() /5){
        t += 175;
    }
    if(this.fBirdPosition < this.ScreenHeight() /4){
        t += 150;
    }
    if(this.fBirdPosition < this.ScreenHeight() /3){
        this.fNextFlapTime += 100;
    }
    if(this.fBirdPosition < this.ScreenHeight() /2){
        t += 50;
    }
    if(this.fBirdAcceleration < 50 
        || (this.fBirdVelocity < 50
        && this.fBirdPosition < this.ScreenHeight() /2)
    ){
        t += 1000;
    }
    if(bindings.tmp++%10==0){
        console.log( this.nFlapCount, this.fNextFlapTime.toFixed(2), this.fBirdPosition.toFixed(2),'v:',this.fBirdVelocity.toFixed(2),'a:', this.fBirdAcceleration.toFixed(2));
    }
    return t;
}

    async runModel() {
        // Create an ONNX inference session
        const session = new onnx.InferenceSession();

        // Load the ONNX model
        await session.loadModel('model.onnx');

        const pipeHeightNext = this.listSection[3];
        const pipeHeightPrev = this.listSection[2];
        const birdHeight = this.fBirdPosition;
        const pipeXPosNext = this.fLevelPosition + this.fSectionWidth - (this.ScreenWidth() / 3.0);
        const flapPeriod = this.fNextFlapTime;
        // Create input data
        const inputData = new Float32Array([
            pipeHeightNext, pipeHeightPrev, birdHeight, pipeXPosNext, flapPeriod
        ]);
        const inputTensor = new onnx.Tensor(inputData, 'float32', [1, 5]); // Replace `5` with the actual input size

        // Run the model
        const outputMap = await session.run([inputTensor]);
        const outputTensor = outputMap.values().next().value;

        // Get the output data
        const outputData = outputTensor.data;
        const idx = outputData.indexOf(Math.max(...outputData));
        this.fNextFlapTime = this.smartFlapTime(idx, 0.8, 1.25);
        if(this.fBirdPosition < this.ScreenHeight() /40){
            this.fNextFlapTime += 500;
        }
        if(this.fBirdPosition < this.ScreenHeight() /20){
            this.fNextFlapTime += 250;
        }
        if(this.fBirdPosition < this.ScreenHeight() /10){
            this.fNextFlapTime += 200;
        }
        if(this.fBirdPosition < this.ScreenHeight() /6){
            this.fNextFlapTime += 100;
        }
        if(this.fBirdPosition < this.ScreenHeight() /5){
            this.fNextFlapTime += 75;
        }
        if(this.fBirdPosition < this.ScreenHeight() /4){
            this.fNextFlapTime += 50;
        }
        if(this.fBirdPosition < this.ScreenHeight() /3){
            this.fNextFlapTime += 40;
        }
        if(this.fBirdPosition < this.ScreenHeight() /2){
            this.fNextFlapTime += 30;
        }
        if(this.fBirdAcceleration < 50 || this.fBirdVelocity < 0){
            this.fNextFlapTime += 0;
        }
        if(bindings.tmp++%10==0){
            console.log( idx, this.fNextFlapTime.toFixed(2), this.fBirdPosition.toFixed(2),'v:',this.fBirdVelocity.toFixed(2),'a:', this.fBirdAcceleration.toFixed(2));
        }
    }

}


