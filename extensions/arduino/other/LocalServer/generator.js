/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.localServer_begin = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const locssid = Blockly.Arduino.valueToCode(block, 'locssid', Blockly.Arduino.ORDER_ATOMIC);
        const locpswd = Blockly.Arduino.valueToCode(block, 'locpswd', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.localServer_init = 
    `#ifdef ESP32
#include <WiFi.h>
#else
#include <ESP8266WiFi.h>
#endif`;
        Blockly.Arduino.definitions_[`localServer_begin`] =
    `const char* ssid = ${locssid};\nconst char* password = ${locpswd};\nWiFiServer server(80);`;

         Blockly.Arduino.setups_[`localServer_begin`] =
    `Serial.begin(115200);
    WiFi.begin(ssid,password);
     while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }
    Serial.println("WiFi Connected");
    server.begin();
    Serial.println("Server started");
    Serial.print("ip Address :");
    Serial.println(WiFi.localIP());`;
       return '';
    };
     
    Blockly.Arduino.localServer_apbegin = function (block) {
        // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
         const locssid = Blockly.Arduino.valueToCode(block, 'locssid', Blockly.Arduino.ORDER_ATOMIC);
         const locpswd = Blockly.Arduino.valueToCode(block, 'locpswd', Blockly.Arduino.ORDER_ATOMIC);
 
         Blockly.Arduino.includes_.localServer_init = 
    `#ifdef ESP32
#include <WiFi.h>
#else
#include <ESP8266WiFi.h>
#endif`;
         Blockly.Arduino.definitions_[`localServer_begin`] =
     `const char* ssid = ${locssid};\nconst char* password = ${locpswd};\nWiFiServer server(80);`;
 
          Blockly.Arduino.setups_[`localServer_begin`] =
     `Serial.begin(115200);
     WiFi.softAP(ssid,password);
     IPAddress apip = WiFi.softAPIP();
     server.begin();
     Serial.println("Server started");
     Serial.print("ip Address : ");
     Serial.println(apip);`;
        return '';
     };

    Blockly.Arduino.localServer_getRequest = function (block) {
      const data =
    `WiFiClient client = server.available();
     if (!client) {return;}
     while(!client.available()){delay(1);}
     String request_ = client.readStringUntil('\\r');
     Serial.println(request_);\n`
        return data;
   };
   
   Blockly.Arduino.localServer_chkRequest = function (block) {
    var request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
    request = request.replace(/\"/g, "");
    return [`request_.indexOf(\"/${request}\") != -1`, Blockly.Arduino.ORDER_ATOMIC];
   };
  
   Blockly.Arduino.localServer_clientFlush = function (block) {
    //const request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.flush();\n';
   };

   Blockly.Arduino.localServer_htmlInit = function (block) {
    //const request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.print(\"HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<!DOCTYPE html><html><head>\");\n';
   };

   Blockly.Arduino.localServer_clientEmpty = function (block) {
    const cli_data = Blockly.Arduino.valueToCode(block, 'cli_data', Blockly.Arduino.ORDER_ATOMIC);
    return `client.print(${cli_data});\n`;
   };

   Blockly.Arduino.localServer_guiButton = function (block) {
    var req_cmd = Blockly.Arduino.valueToCode(block, 'req_cmd', Blockly.Arduino.ORDER_ATOMIC);
    req_cmd = req_cmd.replace(/\"/g, "");

    var BtText = Blockly.Arduino.valueToCode(block, 'BtText', Blockly.Arduino.ORDER_ATOMIC);
    BtText = BtText.replace(/\"/g, "");
    const warp = this.getFieldValue('warp');
     var data = 
    'client.print(\"<a href=\\\"/' + req_cmd + '\\\"\\\"><button>' + BtText + '</button></a>'+ warp + '\");\n';
    return data;
   };

   Blockly.Arduino.localServer_htmlEnd = function (block) {
    //const request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.print(\"</head></html>\");\n';
   };
    return Blockly;
}

exports = addGenerator;
