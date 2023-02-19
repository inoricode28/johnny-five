var express = require('express')
var app = express()
var io = require('socket.io')(app.listen(8081))
var five = require('johnny-five')

app.use(express.static(__dirname + '/'))

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html')
})

let board = new five.Board()

board.on('ready', function(){
  console.log("PRENDER LA BATERÍA ANTES DE MOVER EL MOTOBOT :V")

 
  let der1 = new five.Led(2)
  let der2 = new five.Led(3)

  let izq1 = new five.Led(6)
  let izq2 = new five.Led(7)

  function detener(){
    der1.off()
    der2.off()
    izq1.off()
    izq2.off()
  }

  io.on('connection', (socket)=>{//function(socket)
    socket.on('adelante', ()=>{//function()
        function delay(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function lcd_delay(){
            der1.on()
            await delay(3000);
            der1.off()
            await delay(3000);
            //lcd.clear();
            //await delay(2000);
            //process.exit(0);
        }    
        lcd_delay();
      //llanta derecho
      //der1.on()//2 off
    
      //der2.off()//3 on
      //llanta izquierda
      //izq1.toggle()//6 on
      //izq2.toggle()//7 off

      //setTimeout(function(){
        //detener()
      //}, 10000)

      console.log('\nADELANTE')
    })

    socket.on('atras', function(){
      //llanta derecho
      der1.on()
      der2.off()
      //llanta izquierda
      izq1.off()
      izq2.on()

      setTimeout(function(){
        detener()
      }, 100)
      console.log('\nATRAS')
    })

    socket.on('izquierda', function(){
      izq1.off()
      izq2.on()
      der1.off()
      der2.on()

      setTimeout(function(){
        detener()
      }, 100)
      console.log('\nIZQUIERDA')
    })

    socket.on('derecha', function(){
      izq1.on()
      izq2.off()
      der1.on()
      der2.off()

      setTimeout(function(){
        detener()
      }, 100)
      console.log('\nDERECHA')
    })

    socket.on('detener', function(){
      detener()
      console.log('\nCARRO SE DETIENE')
    })

  })
})