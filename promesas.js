const {Board,LCD}=require('johnny-five');
let myboard = new Board();
myboard.on('ready',()=>{

  
 let lcd = new LCD({
    controller: "PCF8574AT"
  });

  //lcd.useChar("heart");
  //lcd.cursor(0, 0).print("hello :heart:");
  //lcd.cursor(1, 0).print("Blinking? ");
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
    async function lcd_delay() {
    lcd.home().print("Arriba");
    await sleep(3000);
    lcd.cursor(1, 0).print("Abajo");
    await sleep(3000);
    lcd.clear();
    await sleep(2000);
    process.exit(0);
  }
  
  lcd_delay();
});

/*lcd.home().print("Bleep");
  sleep(2000).then(() => { lcd.cursor(1, 0).print("Abajo? "); });
  sleep(4000).then(() => { lcd.clear(); });
  sleep(5000).then(() => { process.exit(0); });
  */


/*setTimeout(()=> {
  lcd.clear();
  lcd.cursor(1, 0).print("Abajo? ");
  setTimeout(()=>{
    lcd.clear();
    sleep(100);
    process.exit(0);

  },7000);
}, 5000); */
