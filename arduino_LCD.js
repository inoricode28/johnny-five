'use strict';
let VSP =require("udp-serial").SerialPort;
let firma = require("firmata");
const {Led, Board,LCD}=require("johnny-five");
let myled, myboard;
let sp = new VSP({
    host: '192.168.0.25',
    type: 'udp4',
    port: 1025
});
let io = new firma.Board(sp);
io.once("ready",()=>{
    console.log("IO Ready");
    io.isReady=true;
    myboard = new Board({io:io,repl:true});
    myboard.on("ready",()=>{
        console.log("Five Ready");
          
  let lcd = new LCD({
    controller: "PCF8574AT"
  });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
    async function lcd_delay() {
    lcd.useChar("heart");
    lcd.home().print("Lucuma:heart:");
    await sleep(5000);
    lcd.cursor(1, 0).print("Pi");
    await sleep(3000);
    lcd.clear();
    await sleep(2000);
    process.exit(0);
  }
  
  lcd_delay();
  
  
  
  });
});

/*lcd.useChar("heart");
  lcd.cursor(0, 0).print("hello :heart:");
  lcd.cursor(1, 0).print("Blinking? ");*/     