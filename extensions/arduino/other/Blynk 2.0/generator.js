/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.Blynk_begin = function (block) {
        const baudrate = this.getFieldValue('baudrate');
        Blockly.Arduino.includes_.Blynk_init = `
#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include "BlynkSimpleEsp8266.h"`;
		Blockly.Arduino.setups_.Blynk_init = `Serial.begin(${baudrate});`;
      return '';
    };
	
	Blockly.Arduino.Blynk_templateid = function (block) {
      // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
       const blynktempid = Blockly.Arduino.valueToCode(block, 'blynktempid', Blockly.Arduino.ORDER_ATOMIC);
       const blynkdname = Blockly.Arduino.valueToCode(block, 'blynkdname', Blockly.Arduino.ORDER_ATOMIC);
       Blockly.Arduino.includes_.Blynk_templateid = `
#define BLYNK_TEMPLATE_ID ${blynktempid}
#define BLYNK_DEVICE_NAME ${blynkdname}`;
      return '';
   };
     
    Blockly.Arduino.Blynk_userid = function (block) {
      // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
       const blynkssid = Blockly.Arduino.valueToCode(block, 'blynkssid', Blockly.Arduino.ORDER_ATOMIC);
       const blynkpass = Blockly.Arduino.valueToCode(block, 'blynkpass', Blockly.Arduino.ORDER_ATOMIC);
       const blynkauth = Blockly.Arduino.valueToCode(block, 'blynkauth', Blockly.Arduino.ORDER_ATOMIC);
       Blockly.Arduino.includes_.Blynk_userid = `#define BLYNK_AUTH_TOKEN ${blynkauth}`

		Blockly.Arduino.definitions_.Blynk_userid = `
char auth[] = BLYNK_AUTH_TOKEN;
char ssid[] = ${blynkssid};
char pass[] = ${blynkpass};`;
		Blockly.Arduino.setups_.Blynk_userid = `Blynk.begin(auth, ssid, pass);`;
		return '';
   };
   
   Blockly.Arduino.Blynk_start = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
      return 'Blynk.run();\n';
    };
   
   Blockly.Arduino.Blynk_receive = function (block) {
    // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
     const blynkin = Blockly.Arduino.valueToCode(block, 'blynkin', Blockly.Arduino.ORDER_ATOMIC);
     const vpin = Blockly.Arduino.valueToCode(block, 'vpin', Blockly.Arduino.ORDER_ATOMIC);
    
     Blockly.Arduino.definitions_[`Blynk_vpin_${vpin}`] =
 `BLYNK_WRITE(V${vpin}){
  ${blynkin} = param.asDouble();
  } `;
    return '';
 };

 Blockly.Arduino.Blynk_send = function (block) {
  // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
   const blynkout = Blockly.Arduino.valueToCode(block, 'blynkout', Blockly.Arduino.ORDER_ATOMIC);
   const vpin = Blockly.Arduino.valueToCode(block, 'vpin', Blockly.Arduino.ORDER_ATOMIC);
   const msec = Blockly.Arduino.valueToCode(block, 'msec', Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.definitions_[`Blynk_time`]=
   `BlynkTimer timer;`
   Blockly.Arduino.definitions_[`Blynk_timers_${vpin}`] =
`void myTimerEvent_${vpin}(){
	Blynk.virtualWrite(V${vpin}, ${blynkout});
 }`;
 
  Blockly.Arduino.setups_[`Blynk_timer_${vpin}`] = 
  `timer.setInterval(${msec}L, myTimerEvent_${vpin});`;
  Blockly.Arduino.loops_[`Blynk_run_timer`]=
  `timer.run();`;
 return '';
};  

Blockly.Arduino.Blynk_string = function (block) {
        var blynkstr = Blockly.Arduino.valueToCode(block, 'blynkstr', Blockly.Arduino.ORDER_ATOMIC);
		blynkstr = blynkstr.replace(/\"/g, "");
        Blockly.Arduino.definitions_[`Blynk_${blynkstr}`] = `String ${blynkstr};`;
		return [`${blynkstr}`, Blockly.Arduino.ORDER_ATOMIC];
    };
	
 Blockly.Arduino.Blynk_stringeql = function (block) {
		var blynkstr = Blockly.Arduino.valueToCode(block, 'blynkstr', Blockly.Arduino.ORDER_ATOMIC);
		blynkstr = blynkstr.replace(/\"/g, "");
        var blynkstreq = Blockly.Arduino.valueToCode(block, 'blynkstreq', Blockly.Arduino.ORDER_ATOMIC);
		return `${blynkstr} = ${blynkstreq};\n`;
    };
	
    return Blockly;
}

exports = addGenerator;
