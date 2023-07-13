
// import SSEntity from './ssentity.mjs';
// import TankModel from './tankmodel.mjs';
const sim = new TankModel();
function setup() {
    let canvas = createCanvas(600, 400);
    canvas.position(300, 50);
  // var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(canvas, {
        // The type of chart we want to create
        type: 'line',
  
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },
  
        // Configuration options e
        options: {
            // Boolean - whether or not the chart should be responsive and resize when the browser does.
            responsive: false,
            // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
        }
    });
  }
  
  function draw() {
    //background(220, 180, 200);
  
    // ellipse(width/2, height/2, 100, 100);
    // ellipse(width/4, height/2, 50, 50);
    sim.render();
  }
  
  