//ECMA_Script 6 <--
//TYPE_Script <-- es para Paginas Web
var express = require('express')
var app = express()
var io = require('socket.io')(app.listen(8081))
const { Board, Leds } = require("johnny-five");
app.use(express.static(__dirname + '/'))
app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html')
})

let myBoard, myleds;

myBoard = new Board()

myBoard.on('ready', ()=> {// ()=> 

console.log("Coneccion establecida")
myleds = new Leds([2,3,6,7]);

function detener(){

  myleds[0].off()//2
  myleds[1].off()//3
  myleds[2].off()//6
  myleds[3].off()//7
}

io.on('connection', (socket)=>{//function(socket) 
 
  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  socket.on('adelante', ()=>{//function()
    
    async function adelante(){
        myleds[0].off()
        myleds[1].on()
        myleds[2].on()
        myleds[3].off()
        await delay(10000);
        detener();
        await delay(10000);
        
    }    
    adelante();
  
  console.log('\nADELANTE')
})

socket.on('atras', ()=>{

  async function atras(){
  myleds[0].on()
  myleds[1].off()
  myleds[2].off()
  myleds[3].on()
  await delay(10000);
  detener();
  await delay(10000);
  }

  atras();
  console.log('\nATRAS')

})

socket.on('derecha', ()=>{//function()
    
  async function derecha(){
      myleds[0].on()
      myleds[1].off()
      myleds[2].on()
      myleds[3].off()
      await delay(10000);
      detener();
      await delay(10000);
      
  }    
  derecha();

console.log('\nDERECHA')
})

socket.on('izquierda', ()=>{//function()
    
  async function izquierda(){
      myleds[0].off()
      myleds[1].on()
      myleds[2].off()
      myleds[3].on()
      await delay(10000);
      detener();
      await delay(10000);
      
  }    
  izquierda();

console.log('\nIZQUIERDA')
})


socket.on('detener', ()=>{ 

  detener();
  console.log('\nDETENER')


})

})
});