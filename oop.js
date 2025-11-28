//const audio = new Audio('sounds/mustang.mp3');
class Car {
  constructor(brand, country, averageSpeed) {
    this.brand = brand;
    this.country = country;
    this.averageSpeed = averageSpeed;
    this.distance = 0;
    this.time = 0;
    this.rest = 0;
    this.audio = new Audio('./sounds/mustang.mp3');
    this.mouseClick = new Audio('./sounds/mouse-click.mp3');
  }
  print() {
    this.mouseClick.play();
    console.log(
      `Brand: ${this.brand} \nCountry: ${this.country} \nAverage speed: ${this.averageSpeed}`
    );
  }
  duration_dest() {
    this.distance = +prompt(`enter the distance to your destination:`);
    this.averageSpeed = +prompt(`enter the average speed:`);
    this.rest = Math.floor(this.distance / this.averageSpeed / 4);
    this.time = Math.ceil(this.distance / this.averageSpeed + this.rest);
    console.log(`you need ${this.time} hours to reach your destination`);
    this.audio.play();
  }
}
let car = new Car('Mustang', 'USA', '300');

class Clock {
  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.tempSeconds = 0;
    this.mouseClick = new Audio('./sounds/mouse-click.mp3');
  }
  CurrentSeconds() {
    this.tempSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
  }
  setTimeFromSeconds() {
    this.hours = Math.floor(this.tempSeconds / 3600);
    this.minutes = Math.floor((this.tempSeconds % 3600) / 60);
    this.seconds = (this.tempSeconds % 3600) % 60;
  }
  showTime() {
    this.mouseClick.play();
    console.log(`time: ${this.hours}:${this.minutes}:${this.seconds}`);
  }
  addSeconds() {
    this.mouseClick.play();
    let addSeconds = Number(
      prompt(`enter the number of seconds you want to add:`)
    );
    this.CurrentSeconds();
    this.tempSeconds += addSeconds;
    this.setTimeFromSeconds();
    // showTime();
  }
  addMinutes() {
    this.mouseClick.play();
    let addMinutes = Number(
      prompt(`enter the number of minutes you want to add:`)
    );
    addMinutes = addMinutes * 60;
    this.CurrentSeconds();
    this.tempSeconds += addMinutes;
    this.setTimeFromSeconds();
    // showTime();
  }
}
const clock = new Clock();
