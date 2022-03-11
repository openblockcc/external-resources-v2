/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.joyStick_init = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.joyStick_init = `#include "JoystickShield.h"`;
        Blockly.Arduino.definitions_[`joyStick_init`] = `JoystickShield joystickShield;`;
        Blockly.Arduino.setups_[`joyStick_init`] = `joystickShield.calibrateJoystick();`;
       return 'joystickShield.processEvents();\n';
    };
     
    Blockly.Arduino.joyStick_buttons = function (block) {
       const buttonState = this.getFieldValue('buttonState');
       return [`joystickShield.${buttonState}()`, Blockly.Arduino.ORDER_ATOMIC];
   };
   
   Blockly.Arduino.joyStick_position = function (block) {
       const position = this.getFieldValue('position');
       return [`joystickShield.${position}()`, Blockly.Arduino.ORDER_ATOMIC];
   };
   
   Blockly.Arduino.joyStick_xypos = function (block) {
       const xypos = this.getFieldValue('xypos');
       return [`joystickShield.${xypos}()`, Blockly.Arduino.ORDER_ATOMIC];
   };
	
    return Blockly;
}

exports = addGenerator;
