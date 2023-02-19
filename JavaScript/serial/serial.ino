void setup() {
  Serial.begin(9600);
  Serial.println("Inicializando Arduino");  

}

void loop() {
  //El while significa que mantendra la espera del frontEnd
  while(Serial.available() > 0) {
      //Espera el dialogo del Frontend y envia una respuesta completa
      Serial.println(Serial.readString() + "Por medio del SERIALPORT");
  }
  delay(500);
}
