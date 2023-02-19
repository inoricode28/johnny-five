//ECMA_Script 6 <--
//TYPE_Script <-- es para Paginas Web
const { Board, Led } = require("johnny-five");
let myBoard, myLed;

myBoard = new Board()

myBoard.on('ready', function() {//  ()=> 

myLed = new Led(13);
myLed.strobe(2000); //myLed.blink(2000);

this.repl.inject({

myLed: myLed

});
});
