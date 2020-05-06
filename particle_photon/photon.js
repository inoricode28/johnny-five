const {Board,Led}= require("johnny-five");
let Particle = require("particle-io");
let myboard = new Board({
  io: new Particle({
    token: "*************",
    deviceId: "*************"
  })
});

myboard.on("ready", function() {
  console.log("Photon IO Ready");
  (led = new Led("D7")).blink(1000);
});