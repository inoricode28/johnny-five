const {Leds, Board, Relays} =require("johnny-five");
let keypress =require("keypress");
myboard = new Board();

myboard.on('ready',()=>{
    console.log("Arduino esta listo");
    myleds = new Leds([13,12,11,10,9,8,7,6]);
    myrelay = new Relays([5,4,3,2]);
    keypress(process.stdin);
    process.stdin.setEncoding('utf-8');
    process.stdin.on('keypress',(ch,key)=>{
        if(!key) { return; }
        switch(key.name){
            case 'q':
                console.log('Bye-bye!');
                process.exit();
                break;
            case 'a':
                myleds[0].blink(500);
                console.log("\n blink");
                break;

            case 's':
                myleds[1].toggle();
                console.log("Toggle");
                break;

            case 'd':
                myleds[0].toggle();
                console.log("Toggle");
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
