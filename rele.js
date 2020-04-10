'use strict';
let VirtualSerialPort = require('udp-serial').SerialPort;
let firmata = require('firmata');
let keypress = require('keypress');
const {Led, Board} = require('johnny-five');
let myled, myboard;
let sp = new VirtualSerialPort({
  host :  '192.168.0.27', //La direccion ip cambia
  type : 'udp4',
  port : 1025
});
//baudrate 115200 , port 1025 and remote 0.0.0.0:0
let io = new firmata.Board(sp);
io.once('ready',function(){
  console.log('IO Ready');
  io.isReady = true;

  myboard = new Board({io:io, repl:true});

  myboard.on('ready', function(){
    console.log('five ready');
    myled = new Led(13);

    keypress(process.stdin);
    process.stdin.setEncoding('utf8');

    process.stdin.on('keypress', function (ch, key){
      if (!key) { return; }
      switch (key.name){
        case 'q':
          console.log('Bye-bye!');
          process.exit();
          break;

        case 'up':
          myled.toggle();
          console.log("Toogle");
          break;

        case 'down':
          myled.off();
          console.log("Apagado");
          break;

        case 'left':
          myled.blink(200);
          console.log("blink");
          break;

        case 'right':
          myled.strobe(100);
          console.log("Strobe");
          break;

        case 'space':
          myled.stop();
          console.log("Detener");
          break;
        default:
          return;

      }
    });
  });
});
