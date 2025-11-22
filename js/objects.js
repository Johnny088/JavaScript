let current_time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  print: function () {
    console.log(`it's ${this.hours}:${this.minutes}:${this.seconds}`);
  },
  set_time: function () {
    this.hours = +prompt(`enter the number of hours:`);
    this.minutes = +prompt(`enter the number of minutes:`);
    this.seconds = +prompt(`enter the number of seconds:`);
  },
  add_second: function () {
    this.seconds += 1;
    if (this.seconds == 60) {
      this.minutes += 1;
      this.seconds = 0;
      if (this.minutes == 60) {
        this.hours += 1;
        this.minutes = 0;
        if (this.hours == 24) {
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
        }
      }
    }
  },
};
// current_time.print();
// current_time.set_time();
// current_time.print();
// current_time.add_second();
// current_time.print();
// current_time.add_second();
// current_time.print();
// current_time.add_second();
// current_time.print();
// current_time.add_second();
// current_time.print();

//task 2
let car = {
  brand: 'Toyota',
  model: 'Corola',
  year: 2000,
  average_speed: 0,
  distance: 0,
  time: 0,
  rest: 0,
  duration_dest: function () {
    this.distance = +prompt(`enter the distance to your destination:`);
    this.average_speed = +prompt(`enter the average speed:`);
    this.rest = Math.floor(this.distance / this.average_speed / 4);
    this.time = this.distance / this.average_speed + this.rest;
    console.log(`you need ${this.time} hours to reach your destination`);
  },
};
