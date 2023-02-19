//FrontEnd

//Inicializo la libreria Serial
const serialPort = require('serialport');
//Creo el Objeto de Comunicacion
const mySerial = new serialPort('COM4',{
    baudRate: 9600
});

//Parser es el traductor de codigo binario a string de datos
const parser = new serialPort.parsers.Readline()
//pipe se encarga de direccionar el mySerial(Lenguaje maquina) a su
//traductor quien es parser
mySerial.pipe(parser)

//Se creara el evento Parser(La traduccion).
parser.on('data', (linea)=>{// function(linea) , ' =>() ' // (function arrow) 
    console.log('El arduino dice ' + linea)//Recibe el dato e imnprime la liena completa
    mySerial.write('Me estoy conectando ')// enviar el dialogo a iniciar
});