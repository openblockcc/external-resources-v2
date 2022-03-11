/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ThingSpeak_begin = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const tsssid = Blockly.Arduino.valueToCode(block, 'tsssid', Blockly.Arduino.ORDER_ATOMIC);
        const tspswd = Blockly.Arduino.valueToCode(block, 'tspswd', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ThingSpeak_init = 
	`#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ThingSpeak.h>`;
        Blockly.Arduino.definitions_[`ThingSpeak_begin`] =
    `const char* ssid = ${tsssid};
const char* password = ${tspswd};
const char* server = "api.thingspeak.com";
WiFiClient client;`;

         Blockly.Arduino.setups_[`ThingSpeak_begin`] =
    `Serial.begin(115200);
	WiFi.begin(ssid,password);

    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }
    Serial.println("WiFi Connected");
    ThingSpeak.begin(client);`;
       return 'client.connect(server,80);\n';
    };
     
    Blockly.Arduino.ThingSpeak_userid = function (block) {
      // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
       const tsuserid = Blockly.Arduino.valueToCode(block, 'tsuserid', Blockly.Arduino.ORDER_ATOMIC);
       const apikey = Blockly.Arduino.valueToCode(block, 'apikey', Blockly.Arduino.ORDER_ATOMIC);
       
       Blockly.Arduino.definitions_[`ThingSpeak_userid`] = 
	`const char * apiKey = ${apikey};
unsigned long ChannelID = ${tsuserid};`;
      return '';
   };
   
 Blockly.Arduino.ThingSpeak_send = function (block) {
  // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
   const tsout = Blockly.Arduino.valueToCode(block, 'tsout', Blockly.Arduino.ORDER_ATOMIC);
   const tsfield = this.getFieldValue('tsfield');
   
 return `ThingSpeak.writeField(ChannelID, ${tsfield}, ${tsout}, apiKey);\n`;
	}; 

Blockly.Arduino.ThingSpeak_push = function (block) {
  // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
   var branch = Blockly.Arduino.statementToCode(this, 'tsmdata');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
 return `  ${branch}\nThingSpeak.writeFields(ChannelID, apiKey);\n`;
	};

Blockly.Arduino.ThingSpeak_multi = function (block) {
  // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
   const tsmout = Blockly.Arduino.valueToCode(block, 'tsmout', Blockly.Arduino.ORDER_ATOMIC);
   const tsmfield = this.getFieldValue('tsmfield');
   
 return `ThingSpeak.setField(${tsmfield}, ${tsmout});\n`;
	}; 

Blockly.Arduino.ThingSpeak_status = function (block) {
      // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
       const tsstatus = Blockly.Arduino.valueToCode(block, 'tsstatus', Blockly.Arduino.ORDER_ATOMIC);
      return `ThingSpeak.setStatus(${tsstatus});\n`;
   };

	return Blockly;
}
exports = addGenerator;
