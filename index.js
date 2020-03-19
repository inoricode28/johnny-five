'use strict';
let VirtualSerialPort = require('udp-serial').SerialPort;
let firmata = require('firmata');
let keypress = require('keypress');
const {
  Led,
  Board
} = require('johnny-five');
let myled, myboard;
let sp = new VirtualSerialPort({
  host: '192.168.0.27',
  type: 'udp4',
  port: 1025
});
//baudrate 115200 , port 1025 and remote 0.0.0.0:0
let io = new firmata.Board(sp);
io.once('ready', function () {
  console.log('IO Ready');
  io.isReady = true;

  myboard = new Board({
    io: io,
    repl: true
  });

  myboard.on('ready', function () {
    console.log('five ready');
    myled = new Led(13);
    myled.blink(100);
    this.repl.inject({
      led: myled
    });
  });
});