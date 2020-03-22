'use strict';
let VirtualSerialPort = require("udp-serial").SerialPort;
let firmata = require("firmata");
let keypress = require("keypress");
const {Leds, Board} = require("johnny-five");
let myleds, myboard;
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
		myleds.blink(1000);
	});
});

