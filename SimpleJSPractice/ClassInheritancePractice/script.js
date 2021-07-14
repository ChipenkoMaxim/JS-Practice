// eslint-disable-next-line max-classes-per-file
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

const rabbit = new Rabbit('White rabbit');
console.log(rabbit.name);

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;

    let mins = date.getMinutes();
    if (mins < 10) mins = `0${mins}`;

    let secs = date.getSeconds();
    if (secs < 10) secs = `0${secs}`;

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// Alter
/*
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    const {precision=1000} = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(()=>this.render(), this.precision);
  }
}
*/

// My solution
class ExtendedClock extends Clock {
  constructor(template, precision) {
    super(template);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const newClock = new ExtendedClock({ template: 'h:m:s' }, 1000);
newClock.start();
