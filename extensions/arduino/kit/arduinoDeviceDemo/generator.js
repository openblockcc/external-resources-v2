/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.deviceDemo_button = function () {
        const pin = this.getFieldValue('PIN');
        Blockly.Arduino.setups_[`setup_input_${pin}`] = `pinMode(${pin}, INPUT);`;
        const code = `digitalRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.deviceDemo_ultrasonic = function () {
        const trig = this.getFieldValue('TRIG');
        const echo = this.getFieldValue('ECHO');
        const unit = this.getFieldValue('UNIT');
        Blockly.Arduino.definitions_.define_HCSR = '#include <HCSR04Esp32.h>';
        Blockly.Arduino.definitions_[`var_ultrasonic${trig}`] =
            `UltraSonicDistanceSensor distanceSensor_${trig}(${trig}, ${echo});\n`;
        const code = `distanceSensor_${trig}.measureDistance${unit}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.deviceDemo_rgb = function () {
        const pin = this.getFieldValue('PIN');
        const lednum = Blockly.Arduino.valueToCode(this, 'ALL', Blockly.Arduino.ORDER_ATOMIC);
        const pos = Blockly.Arduino.valueToCode(this, 'POS', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const B = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_.include_Adafruit_NeoPixel = '#include <Adafruit_NeoPixel.h>';

        Blockly.Arduino.definitions_[`var_rgb_display${pin}`] = `Adafruit_NeoPixel rgbLed_${pin} = Adafruit_NeoPixel(${lednum}, ` +
            `${pin}, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`setup_rgb_display_setpin${pin}`] = `rgbLed_${pin}.begin();\n  rgbLed_${pin}.show();\n`;


        if (pos === '0') {
            return `for (int ik = 0; ik < ${lednum}; ik++)\nrgbLed_${pin}.setPixelColor(ik, ${R}, ${G}, ${B});\n` +
                `rgbLed_${pin}.show();\ndelay(1);\n`;
        }
        return `rgbLed_${pin}.setPixelColor(${pos}-1, ${R}, ${G}, ${B});\nrgbLed_${pin}.show();\ndelay(1);\n`;
    };

    return Blockly;
}


exports = addGenerator;
