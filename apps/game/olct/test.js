
import { olcConsoleGameEngine } from './olct.js';


export class Test extends olcConsoleGameEngine {
    constructor(ctx) {
        super(ctx); // Call the parent constructor with the canvas ID
        this.m_sAppName = "Test OLC"; // Set the application name
    }

    // Called by olcConsoleGameEngine
    OnUserCreate() {
        console.log(`OLC font: ${this.m_nFontHeight} - ${this.m_sAppName} - height: ${this.ScreenHeight()}`);
        return true;
    }

    // Called by olcConsoleGameEngine
    OnUserUpdate(fElapsedTime) {
        this.Fill(0, 0, this.ScreenWidth(), this.ScreenHeight(), PIXEL_SOLID, COLOUR.BG_BLACK);
        this.SetStatus(`OLC Engine - ${this.m_sAppName} - FPS: ${(1.0 / fElapsedTime).toFixed(3)}`);

        for (let c = 0; c < 16; c++) {
            this.Fill(0, c * 3, 2, c * 3 + 2, PIXEL_QUARTER, Color[c]);
            this.Fill(3, c * 3, 5, c * 3 + 2, PIXEL_HALF, Color[c]);
            this.Fill(6, c * 3, 8, c * 3 + 2, PIXEL_THREEQUARTERS, Color[c]);
            this.Fill(9, c * 3, 11, c * 3 + 2, PIXEL_SOLID, Color[c]);

            this.Fill(12, c * 3, 14, c * 3 + 2, PIXEL_THREEQUARTERS, bOR(Color[c], BG_WHITE));
            this.Fill(15, c * 3, 17, c * 3 + 2, PIXEL_HALF, bOR(Color[c], BG_WHITE));
            this.Fill(18, c * 3, 20, c * 3 + 2, PIXEL_QUARTER, bOR(Color[c], BG_WHITE));
        }
        return true;
    }
}

