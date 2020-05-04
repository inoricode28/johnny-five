'use strict';
let VSP = require("udp-serial").SerialPort;
let firmata = require("firmata");
const {Led, Board} = require("johnny-five");
let myled, myboard;
let sp = new VSP({
	host : '192.168.0.25',
	type : 'udp4',
	port : 1025
});

let io = new firmata.Board(sp);
io.once('ready', ()=>{
	console.log('IO Ready');
	io.isReady = true;
	console.log(//Me permite ver la firmware con la que trabaja el arduino
		io.firmware.name + " - " +
		io.firmware.version.major + "." +
		io.firmware.version.minor
	  );	  
	myboard = new Board({io:io, repl:true});	
	myboard.on('ready',()=>{
		console.log('Johnny-Five Listo!!!');
		myled = new Led(13);
		myled.blink(1000);

		myboard.repl.inject({
			led: myled
		  });

	});
});