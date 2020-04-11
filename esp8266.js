'use strict';
let VSP = require("etherport-client").EtherPortClient;
let firma = require("firmata");
const {Led, Board}=require("johnny-five");
let myled, myboard;
let sp = new VSP({
    host: '192.168.0.113',
    port: 3030
});
let io = new firma.Board(sp);
io.once("ready",()=>{
    console.log("IO Ready");
    io.isReady=true;
    myboard = new Board({io:io,repl:true});
    myboard.on("ready",()=>{
        console.log("Five Ready");
        myled = new Led(16);
        myled.blink(1000);       
    });

});