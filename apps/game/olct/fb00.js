// console.log("hello world");
// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
// console.log(canvas);
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// window.addEventListener('resize', function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     init();
// }
// );

// ctx.fillStyle = 'red';
// ctx.fillRect(10, 20, 150, 50);
// ctx.beginPath();
// ctx.arc(100,100,50,0,Math.PI*2);
// ctx.fill()

import { Test } from './test.js';
import { OneLoneCoderFlappyBird } from './fbird.js';

// const game = new Test('canvas1');
const game = new OneLoneCoderFlappyBird('canvas1');
// game.ConstructConsole(80, 48, 8,8);
game.ConstructConsole(80, 48, 2,2);
game.Start(); // Start the game engine

