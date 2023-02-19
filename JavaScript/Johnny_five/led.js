let cinco = require("johnny-five");//Llama ala libreria #include
let placa = new cinco.Board(); //void setup

//Necesito crear el Evento
placa.on("ready",function(){//Void loop
    let led = new cinco.Leds([2,3,4,5,6,7,8,9,10,11,12,13]);//pinMode(2,OUTPUT);
    //Metodo
    //led.pulse();//PWM Modulacion de ancho de pulso 3,5,6,9,10,11
    //led.blink(100);

    this.repl.inject({
        
        //myled : led

        on: ()=>{//Funcion Anonima
            led.on();
        },
        off: ()=>{
            led.off();
        },
        stop: function(){
            led.stop();
        },
        pin13: ()=>{
            led[11].toggle();
        },
        pin12: ()=>{
            led[10].toggle();
        },
        pin11: ()=>{
            led[9].toggle();
        },
        pin10: ()=>{
            led[8].toggle();
        },
        pin9: ()=>{
            led[7].toggle();
        },
        pin8: ()=>{
            led[6].toggle();
        },
        pin7: ()=>{
            led[5].toggle();
        },
        pin6: ()=>{
            led[4].toggle();
        },
        pin5: ()=>{
            led[3].toggle();
        },
        pin4: ()=>{
            led[2].toggle();
        },
        pin3: ()=>{
            led[1].toggle();
        },
        pin2: ()=>{
            led[0].toggle();
        },
        
    });


});
//led(13,3,4,5); posicion 0,1,2,3

