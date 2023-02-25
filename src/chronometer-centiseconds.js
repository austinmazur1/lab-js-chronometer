class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    start(printTimeCallback) {
      this.intervalId = setInterval(() => {
       this.currentTime++;
       if (typeof printTimeCallback === 'function') {
         printTimeCallback();
       //   clearInterval(this.currentTime);
       // } 
       
       }  },1)
     }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
    return (this.currentTime % 60000) / 1000;
  }

  getCentiseconds() {
    let centi = (this.currentTime % 60000) / 1000;
    return  Math.floor((centi % 2) * 1000)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return ('0' + value)
    else return (String(value))
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
  }
}
