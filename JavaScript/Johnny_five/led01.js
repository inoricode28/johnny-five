'use strict';
let VirtualSerialPort = require("udp-serial").SerialPort;
let firmata = require("firmata");
const {Leds, Board} = require("johnny-five");
let myleds, myboard;
let sp = new VirtualSerialPort({
	host: '192.168.1.4',
	type : 'udp4',
	port : 1025
});



