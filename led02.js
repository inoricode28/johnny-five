'use strict';
let VirtualSerialPort = require("udp-serial").SerialPort;
let firmata = require("firmata");
let keypress = require("keypress");
const {Leds, Board, Relays} = require("johnny-five");
let myleds, myboard,myrelays;
let sp = new VirtualSerialPort({
	host: '192.168.0.11',
	type : 'udp4',
	port : 1025
});

let io = new firmata.Board(sp);
io.once('ready', function(){
	console.log('IO Ready');
	io.isReady = true;
	myboard = new Board({io:io, repl:true});
	myboard.on('ready',function(){
		console.log('five ready');
		myleds = new Leds([13,12,11,10,9,8,7,6]);
		myrelays = new Relays([5,4,3,2]);
		keypress(process.stdin);
    	process.stdin.setEncoding('utf8');
    	process.stdin.on('keypress', function (ch, key){
      if (!key) { return; }
      switch (key.name){
        case 'q':
          console.log('Bye-bye!');
          process.exit();
          break;

        case 'a':
          myleds[0].toggle();
          console.log("Toogle");
          break;

        case 's':
          myleds[1].toggle();
          console.log("Toogle");
          break;

        case 'd':
          myleds[2].toggle();
          console.log("Toogle");
          break;

        case 'f':
          myleds[3].toggle();
          console.log("Toogle");
          break;

        case 'g':
          myleds[4].toggle(100);
          console.log("Toogle");
          break;

        case 'h':
          myleds[5].toggle(100);
          console.log("Toogle");
          break;

        case 'j':
          myleds[6].toggle(100);
          console.log("Toogle");
          break;

        case 'k':
          myleds[7].toggle(100);
          console.log("Toogle");
          break;
        case 'z':
          myrelays[0].toggle(100);
          console.log("Toogle relay");
          break;

        case 'x':
          myrelays[1].toggle(100);
          console.log("Toogle relay");
          break;

        case 'v':
          myrelays[2].toggle(100);
          console.log("Toogle relay");
          break;

        case 'b':
          myrelays[3].toggle(100);
          console.log("Toogle relay");
          break;
 

        case 'space':
          myleds.stop();
          console.log("Detener");
          break;
        default:
          return;

      }
    });
	});
});

