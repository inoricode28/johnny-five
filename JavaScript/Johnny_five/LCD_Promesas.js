//EcmaScript 6
const {Board, LCD} =require("johnny-five");
let myboard = new Board;
myboard.on('ready',()=>{
    let lcd = new LCD({
        controller : "PCF8574T"
    });

    function delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function lcd_delay(){
        lcd.home().print("Arriba");
        await delay(3000);
        lcd.cursor(1,0).print("Abajo");
        await delay(3000);
        lcd.clear();
        await delay(2000);
        process.exit(0);
    }

    lcd_delay();

});
