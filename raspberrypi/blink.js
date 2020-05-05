const {Led, Board}= require("johnny-five");
let Raspi = require("raspi-io").RaspiIO;
let board = new Board({
  io: new Raspi()
});

board.on("ready", ()=> {
  //let led = new Led("P1-13");
  //led.blink(100);
  //Es el metodo mas reducido del codigo blink
  (new Led('P1-13')).blink(100);
});