// import SSEntity from './ssentity.mjs';
// import TankSim from './tanksim.mjs';
// import Random from './random.mjs';

class TankModel {
  constructor() {
    this.mainTank = new SSEntity("Tank", 0, 0, 80, 80);
    this.fillers = new Array(4);
    this.cars = new Array(4);
    this.stations = new Array(4);
    this.CAR = 0;
    this.STATION = 1;
    this.TANK = 2;
    this.rand = new Random();
    for (let j = 0; j < this.fillers.length; j++) {
      let i = 50;
      let y = 100 + (i * j);
      this.fillers[j] = new SSEntity(`station${j + 1}`, 40, y, 40, 40);
    }
    for (let j = 0; j < this.cars.length; j++) {
      let i = 30;
      let x = 100 + (i * j);
      this.cars[j] = new SSEntity(`car${j + 1}`, x, 0, 20, 40);
    }
  }

  render() {
    this.simulate();
    this.mainTank.render();
    for (const station of this.fillers)
      station.render();
    for (let i = 0; i < TankSim.CARS; i++)
      this.cars[i].render();
  }

  simulate() {
    if (TankSim.FILLED == 0) {
      TankSim.CARS = this.rand.nextInt(this.cars.length) + 1;
      for (let i = 0; i < TankSim.CARS; i++) {
        let j = this.rand.nextInt(this.cars.length);
        while (this.stations.includes(j)) {
          j = this.rand.nextInt(4);
        }
        this.stations[i] = j;
      }
    }

    let v = 1;
    for (let i = 0; i < TankSim.CARS; i++) {
      if (!this.fillers[this.stations[i]].done()) {
        v++;
      }
    }
      
    if (this.mainTank.empty_alarm() || !this.mainTank.done()) {
      this.mainTank.filling(v);
    }
      
    for (let i = 0; i < TankSim.CARS; i++) {
      if (this.fillers[this.stations[i]].empty_alarm() || !this.fillers[this.stations[i]].done()) {
        this.fillers[this.stations[i]].filling(v);
        this.mainTank.emptying();
      }
      this.cars[i].filling();
      this.fillers[this.stations[i]].emptying();
    }
  }
}
