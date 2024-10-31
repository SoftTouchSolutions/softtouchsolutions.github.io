Array.prototype.max = function() {
  return Math.max(...this);
}

Array.prototype.min = function() {
  return Math.min(...this);
}
const COLOUR = {
  FG_BLACK: '#000000',       // 0x0000
  FG_DARK_BLUE: '#0000FF',   // 0x0001
  FG_DARK_GREEN: '#008000',   // 0x0002
  FG_DARK_CYAN: '#008080',    // 0x0003
  FG_DARK_RED: '#800000',      // 0x0004
  FG_DARK_MAGENTA: '#800080',  // 0x0005
  FG_DARK_YELLOW: '#808000',   // 0x0006
  FG_GREY: '#808080',          // 0x0007
  FG_DARK_GREY: '#A9A9A9',     // 0x0008
  FG_BLUE: '#0000FF',         // 0x0009
  FG_GREEN: '#00FF00',        // 0x000A
  FG_CYAN: '#00FFFF',         // 0x000B
  FG_RED: '#FF0000',          // 0x000C
  FG_MAGENTA: '#FF00FF',      // 0x000D
  FG_YELLOW: '#FFFF00',       // 0x000E
  FG_WHITE: '#FFFFFF',        // 0x000F
  BG_BLACK: '#000000',        // 0x0000
  BG_DARK_BLUE: '#0000FF',    // 0x0010
  BG_DARK_GREEN: '#008000',    // 0x0020
  BG_DARK_CYAN: '#008080',     // 0x0030
  BG_DARK_RED: '#800000',       // 0x0040
  BG_DARK_MAGENTA: '#800080',   // 0x0050
  BG_DARK_YELLOW: '#808000',    // 0x0060
  BG_GREY: '#808080',           // 0x0070
  BG_DARK_GREY: '#A9A9A9',      // 0x0080
  BG_BLUE: '#0000FF',          // 0x0090
  BG_GREEN: '#00FF00',         // 0x00A0
  BG_CYAN: '#00FFFF',          // 0x00B0
  BG_RED: '#FF0000',           // 0x00C0
  BG_MAGENTA: '#FF00FF',       // 0x00D0
  BG_YELLOW: '#FFFF00',        // 0x00E0
  BG_WHITE: '#FFFFFF'          // 0x00F0
};

const PIXEL_SOLID = 1       // Fully opaque
const PIXEL_THREEQUARTERS =  0.75 // 75% opaque
const PIXEL_HALF =  0.5    // 50% opaque
const PIXEL_QUARTER =  0.25    // 25% opaque
const FG_BLACK  = COLOUR.FG_BLACK
const BG_WHITE = COLOUR.BG_WHITE

const color_lookup = [
  'rgba(0, 0, 0, 1)',        // 0: Black
  'rgba(0, 0, 127, 1)',      // 1: Dark Blue
  'rgba(0, 127, 0, 1)',      // 2: Dark Green
  'rgba(0, 127, 127, 1)',    // 3: Dark Cyan
  'rgba(127, 0, 0, 1)',      // 4: Dark Red
  'rgba(127, 0, 127, 1)',    // 5: Dark Magenta
  'rgba(127, 127, 0, 1)',    // 6: Dark Yellow
  'rgba(192, 192, 192, 1)',   // 7: Light Grey
  'rgba(127, 127, 127, 1)',   // 8: Dark Grey
  'rgba(0, 0, 255, 1)',      // 9: Blue
  'rgba(0, 255, 0, 1)',      // A: Green
  'rgba(0, 255, 255, 1)',    // B: Cyan
  'rgba(255, 0, 0, 1)',      // C: Red
  'rgba(255, 0, 255, 1)',    // D: Magenta
  'rgba(255, 255, 0, 1)',    // E: Yellow
  'rgba(255, 255, 255, 1)'   // F: White
];

function rgbaArray2HexArray(rgbaArray) {
  return rgbaArray.map(rgba => {
  // Extract the RGBA values using a regular expression
  const result = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
  if (result) {
    const r = parseInt(result[1], 10);
    const g = parseInt(result[2], 10);
    const b = parseInt(result[3], 10);
    // Convert to hex and ensure two digits
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    return hex;
  }
  return null; // Return null if the format is incorrect
});
}
function rgb2hex(r,g,b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb2Hex(rgb) {
  return rgb2hex(rgb.r, rgb.g, rgb.b);
}
function rgba2hex(rgba) {
  // Extract the RGBA values using a regular expression
  const result = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
  if (result) {
    const r = parseInt(result[1], 10);
    const g = parseInt(result[2], 10);
    const b = parseInt(result[3], 10);
    // Convert to hex and ensure two digits
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    return hex;
  }
  return null; // Return null if the format is incorrect
}
function rgba2Name(rgba) {
  const hex = rgba2hex(rgba);
  return hex2name(hex);
}
const bindings = {tmp:0}
const Color = rgbaArray2HexArray(color_lookup);

function bOR(color1, color2) {
  // Function to convert hex to RGB
  function hexToRgb(hex) {
      // Remove the '#' if present
      hex = hex.replace('#', '');
      // Parse the hex string into RGB components
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return { r, g, b };
  }
  // Function to convert RGB to hex
  function rgbToHex(r, g, b) {
      // Convert each component to a two-digit hex string and concatenate
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }
  // Convert both colors to RGB
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Perform bitwise OR on each component
  const rResult = rgb1.r ^ rgb2.r;
  const gResult = rgb1.g ^ rgb2.g;
  const bResult = rgb1.b ^ rgb2.b;

  // Convert the resulting RGB back to hex
  return rgbToHex(rResult, gResult, bResult);
}
// Function to get RGB values
function getRGB(color) {
  // Check if the input is a color name in the COLOUR object
  if (typeof color === 'string' && 
    (COLOUR[color?.toUpperCase]
    || COLOUR[`FG_${color?.toUpperCase()}`]
    || COLOUR[`BG_${color?.toUpperCase()}`]
    || colorName2Hex(color)
  )){
    color = COLOUR[color.toUpperCase]
        || COLOUR[`FG_${color.toUpperCase()}`]
        || COLOUR[`BG_${color.toUpperCase()}`]
        || colorName2Hex(color)
      }
  // If the input is a hex value, convert it to RGB
  if (typeof color === 'string' && color.startsWith('#')) {
      // Remove the '#' and parse the hex value
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return { r, g, b }; // Return RGB values as an object
  }
  // If the input is invalid, return null
  return null;
}

const VK_SPACE = { name: 'Space', key: 32 }; // Space
const VK_BACK = { name: 'Backspace', key: 8 }; // Backspace
const VK_DELETE = { name: 'Delete', key: 46 }; // Delete
const VK_HOME = { name: 'Home', key: 36 }; // Home
const VK_END = { name: 'End', key: 35 }; // End
const VK_RETURN = { name: 'Enter', key: 13 }; // Enter
const VK_TAB = { name: 'Tab', key: 9 }; // Tab
const VK_INSERT = { name: 'Insert', key: 45 }; // Insert
const VK_LSHIFT = { name: 'Left Shift', key: 16 }; // Left Shift
const VK_RSHIFT = { name: 'Right Shift', key: 16 }; // Right Shift (same key code)
const VK_LCONTROL = { name: 'Left Control', key: 17 }; // Left Control
const VK_RCONTROL = { name: 'Right Control', key: 17 }; // Right Control (same key code)
const VK_PRIOR = { name: 'Page Up', key: 33 }; // Page Up
const VK_NEXT = { name: 'Page Down', key: 34 }; // Page Down
const VK_ESCAPE = { name: 'Escape', key: 27 }; // Escape
const VK_UP = { name: 'Up Arrow', key: 38 }; // Up Arrow
const VK_DOWN = { name: 'Down Arrow', key: 40 }; // Down Arrow
const VK_LEFT = { name: 'Left Arrow', key: 37 }; // Left Arrow
const VK_RIGHT = { name: 'Right Arrow', key: 39 }; // Right Arrow
const VK_F1 = { name: 'F1', key: 112 }; // F1
const VK_F2 = { name: 'F2', key: 113 }; // F2
const VK_F3 = { name: 'F3', key: 114 }; // F3
const VK_F4 = { name: 'F4', key: 115 }; // F4
const VK_F5 = { name: 'F5', key: 116 }; // F5
const VK_F6 = { name: 'F6', key: 117 }; // F6
const VK_F7 = { name: 'F7', key: 118 }; // F7
const VK_F8 = { name: 'F8', key: 119 }; // F8
const VK_F9 = { name: 'F9', key: 120 }; // F9
const VK_F10 = { name: 'F10', key: 121 }; // F10
const VK_F11 = { name: 'F11', key: 122 }; // F11
const VK_F12 = { name: 'F12', key: 123 }; // F12
const VK_MENU = { name: 'Menu', key: 93 }; // Context Menu (Right-click)

const color2hex = {
'black': '#000000',
'darkblue': '#00007F',
'puredarkblue': '#00008B',
'puredarkgreen': '#006400',
'darkgreen': '#007F00',
'puredarkcyan': '#008B8B',
'darkcyan': '#007F7F',
'darkred': '#7F0000',
'puredarkred': '#8B0000',
'puredarkmagenta': '#8B008B',
'darkmagenta': '#7F007F',
'puredarkyellow': '#BDB76B',
'darkyellow': '#7F7F00',
'grey': '#808080',
'darkgrey': '#7F7F7F',
'puredarkgrey': '#A9A9A9',
'blue': '#0000FF',
'green': '#00FF00',
'puregreen': '#008000',
'cyan': '#00FFFF',
'red': '#FF0000',
'magenta': '#FF00FF',
'yellow': '#FFFF00',
'white': '#FFFFFF',
'lightgrey': '#C0C0C0',
'purelightgrey': '#D3D3D3',
'lightblue': '#ADD8E6',
'lightgreen': '#90EE90',
'lightcyan': '#E0FFFF',
'lightred': '#FFB6C1',
'lightmagenta': '#FF77FF',
'lightyellow': '#FFFFE0',
};

function colorName2Hex(colorName) {
  // Convert the color name to lowercase to ensure case-insensitivity
  const normalizedColorName = colorName.toLowerCase();
  // Return the corresponding hex value or null if not found
  return color2hex[normalizedColorName] || null;
}

function hex2name(hex)
{
  for (var key in color2hex) {
    if (color2hex[key] === hex.toUpperCase()) {
      return key;
    }
  }
  return null;
}
