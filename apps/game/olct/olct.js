
export class olcSprite {
    constructor(w, h) {
        this.nWidth = w;
        this.nHeight = h;
        this.m_Colours = new Array(w * h).fill('black');
    }

    setColour(x, y, c) {
        if (x >= 0 && x < this.nWidth && y >= 0 && y < this.nHeight) {
            this.m_Colours[y * this.nWidth + x] = c;
        }
    }

    getColour(x, y) {
        if (x >= 0 && x < this.nWidth && y >= 0 && y < this.nHeight) {
            return this.m_Colours[y * this.nWidth + x];
        }
        return 'black';
    }
}

export class olcConsoleGameEngine {
  constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext('2d');
      this.m_nScreenWidth = 80;
      this.m_nScreenHeight = 30;
      this.m_nFontWidth = 10;
      this.m_nFontHeight = 20;
      this.m_bufScreen = Array.from({ length: 2 }, () => new Array(this.m_nScreenWidth * this.m_nScreenHeight).fill({ colour: 'black' }));
      this.m_nCurrentBuffer = 0;
      this.m_bAtomActive = false;
      this.m_status = "";

      // Additional members for event handling
      this.m_keys = new Array(512).fill({bPressed:false, bReleased:false, bHeld:false })
      this.m_keyNewState = new Array(512).fill(false);
      this.m_keyOldState = new Array(512).fill(false);
      this.m_mouse = new Array(5).fill({bPressed:false, bReleased:false, bHeld:false })
      this.m_mouseNewState = new Array(5).fill(false);
      this.m_mouseOldState = new Array(5).fill(false);
      this.m_mousePosX = 0;
      this.m_mousePosY = 0;

      // Bind the event handler
      window.addEventListener('keydown', (e) => this.handleEvent(e));
      window.addEventListener('keyup', (e) => this.handleEvent(e));
      this.canvas.addEventListener('mousemove', (e) => this.handleEvent(e));
      this.canvas.addEventListener('mousedown', (e) => this.handleEvent(e));
      this.canvas.addEventListener('mouseup', (e) => this.handleEvent(e));
  }

  SetStatus(str){ this.m_status=str;}
  ScreenWidth() { return this.m_nScreenWidth; }
    ScreenHeight() { return this.m_nScreenHeight; }

  OnUserCreate() {
      return true;
  }

  OnUserUpdate(fElapsedTime) {
      return true;
  }

 // Event handling method
  handleEvent(event) {
    switch (event.type) {
          case 'keydown':
              this.m_keyNewState[event.keyCode] = true;
              break;
          case 'keyup':
              this.m_keyNewState[event.keyCode] = false;
              break;
          case 'mousemove':
              this.m_mousePosX = Math.floor(event.offsetX / this.m_nFontWidth);
              this.m_mousePosY = Math.floor(event.offsetY / this.m_nFontHeight);
              break;
          case 'mousedown':
              this.m_mouseNewState[event.button] = true;
              break;
          case 'mouseup':
              this.m_mouseNewState[event.button] = false;
              break;
      }
  }

  // Update method to handle key states
  updateKeyStates() {
      for (let k = 0; k < 512; k++) {
          this.m_keys[k].bPressed = false;
          this.m_keys[k].bReleased = false;
          if (this.m_keyNewState[k] !== this.m_keyOldState[k]) {
              if (this.m_keyNewState[k]) {
                  // Key pressed
                  this.m_keys[k].bPressed = !this.m_keys[k].bHeld
                  this.m_keys[k].bHeld = true;
                  // console.log(this.m_keys,this.m_keys[k],k)
                  bindings.key = true
              } else {
                  // Key released
                  this.m_keys[k].bReleased = true;
                  this.m_keys[k].bHeld = false;
              }
          }
          this.m_keyOldState[k] = this.m_keyNewState[k];
      }
  }

  // Update method to handle mouse states
  updateMouseStates() {
    for (let m = 0; m < 5; m++) {
      this.m_mouse[m].bPressed = false;
      this.m_mouse[m].bReleased = false;
      if (this.m_mouseNewState[m] !== this.m_mouseOldState[m]) {
        if (this.m_mouseNewState[m]) {
          // Mouse button pressed
          this.m_mouse[m].bPressed = true;
          this.m_mouse[m].bHeld = true;
          // console.log(this.m_mouse,m)
          bindings.click = true
        } else {
          this.m_mouse[m].bReleased = true;
          this.m_mouse[m].bHeld = false;
        }
      }
      this.m_mouseOldState[m] = this.m_mouseNewState[m];
    }
  }

  Start() {
      this.m_bAtomActive = true;

      this.ConstructConsole(this.m_nScreenWidth, this.m_nScreenHeight, this.m_nFontWidth, this.m_nFontHeight);

      if (!this.OnUserCreate()) {
          this.m_bAtomActive = false;
      }

      let tp1 = performance.now();
      let tp2;

      const gameLoop = () => {
          if (!this.m_bAtomActive) return;

          tp2 = performance.now();
          const fElapsedTime = (tp2 - tp1) / 1000;
          tp1 = tp2;
          this.updateStatus();
          this.updateKeyStates()
          this.updateMouseStates()
          if (!this.OnUserUpdate(fElapsedTime)) {
              this.m_bAtomActive = false;
          }
          // if(bindings.tmp++%10000==0){
          //   console.log(this.m_bufScreen[this.m_nCurrentBuffer])
          //     // .filter(c=>rgba2Name(c.colour)!=='white'));
          // }
          // this.update();

          requestAnimationFrame(gameLoop);
      };

      requestAnimationFrame(gameLoop);
  }
  // Method to update and draw the status message
  updateStatus() {
    const lastLineY = this.m_nScreenHeight + (2*this.m_nFontHeight);
    this.clear(0, lastLineY,this.canvas.width,this.canvas.height-lastLineY)
    this.DrawString(0,lastLineY, this.m_status);
  }
  ConstructConsole(width, height, fontw, fonth) {
      this.m_nScreenWidth = width;
      this.m_nScreenHeight = height;
      this.m_nFontWidth = fontw;
      this.m_nFontHeight = fonth;

      this.m_bufScreen[0] = new Array(this.m_nScreenWidth * this.m_nScreenHeight).fill({ colour: 'black' });
      this.m_bufScreen[1] = new Array(this.m_nScreenWidth * this.m_nScreenHeight).fill({ colour: 'black' });
      this.m_nCurrentBuffer = 0;

      return true;
  }

  update() {
      this.clear();
      this.m_nCurrentBuffer = (this.m_nCurrentBuffer + 1) % 2; // Toggle between 0 and 1
      const currentBuffer = this.m_bufScreen[this.m_nCurrentBuffer];
      for (let x = 0; x < this.m_nScreenWidth; x++) {
          for (let y = 0; y < this.m_nScreenHeight; y++) {
              const cell = currentBuffer[y * this.m_nScreenWidth + x];
              this.draw(x, y, cell.colour);
          }
      }
  }
  clear(x=0,y=0,w=this.canvas.width,h=this.canvas.height)
  {
    this.context.clearRect(x,y,w,h);
  }
  Fill(x1, y1, x2, y2, alpha, col = 'white') {
    const c = getRGB(col);
    const rgba = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
    const cname = hex2name(rgb2Hex(c));
    // console.log(cname||rgba,'x=',x1,'y=',y1)
    const currentBuffer = this.m_bufScreen[this.m_nCurrentBuffer];
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            this.draw(x, y, `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`);
            // const cell = currentBuffer[y * this.m_nScreenWidth + x];
            // currentBuffer[y * this.m_nScreenWidth + x].colour = rgba
        }
    }
    // if(bindings.tmp++%10000==0){
    //   console.log(x1,y1)
    //   // console.log(this.m_bufScreen[this.m_nCurrentBuffer]
    //   //   .map(c=>rgba2Name(c.colour)||c.colour))
    //     // .filter(c=>c!=='white'));
    //   }
}
  draw(x, y, col = 'white') {
    // if(bindings.tmp++%1000==0)console.log(rgba2Name(col),x, y);
    if (x >= 0 && x < this.m_nScreenWidth && y >= 0 && y < this.m_nScreenHeight) {
        this.context.fillStyle = col;
        this.context.fillRect(x * this.m_nFontWidth, y * this.m_nFontHeight, this.m_nFontWidth, this.m_nFontHeight);
    }
  }
  DrawString(x, y, str, col = 'white', sz=8) {
    this.context.fillStyle = col; // Set the fill color
    sz = [this.m_nFontHeight,sz].max()
    this.context.font = `${sz}px monospace`; // Set the font size and type
    this.context.fillText(str, x * this.m_nFontWidth, y * this.m_nFontHeight); // Draw the string
  }
}
