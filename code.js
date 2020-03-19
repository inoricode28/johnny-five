const {Led, Board} = require("johnny-five");
let myled, myboard;
myboard = new Board();
myboard.on("ready", ()=> {
	myled = new Led(13);
	myled.blink(100);
});
