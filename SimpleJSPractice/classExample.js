class Machine {
  constructor() {
    const self = this;
    self.name = 'Keka';
    self.speed = 100;
    const mem = 'cmechnoi';
  }

  lel() {
    console.log(this.name);
    console.log(this.speed);
    console.log(mem);
  }
}

function CoffeeMachine(power) {
  this.waterAmount = 0;

  const WATER_HEAT_CAPACITY = 4200;

  const self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert('Кофе готов!');
  }

  this.run = function () {
    setTimeout(onReady, getBoilTime());
  };
}

const fera = new Machine();
console.log(fera);
fera.lel();
