/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //按钮
    Blockly.Arduino.thirdParty_button = function() {
        var pin = this.getFieldValue('PIN');
        Blockly.Arduino.setups_['setup_input_' + pin] = 'pinMode(' + pin + ', INPUT);';
        var code = 'digitalRead(' + pin + ')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 超声波
    Blockly.Arduino.thirdParty_ultrasonic = function() {
        var trig = this.getFieldValue('TRIG');
        var echo = this.getFieldValue('ECHO');
        var unit = this.getFieldValue('UNIT');
        Blockly.Arduino.definitions_['define_HCSR'] = '#include <HCSR04Esp32.h>';
        Blockly.Arduino.definitions_['var_ultrasonic' + trig] =
            `UltraSonicDistanceSensor distanceSensor_${trig}(${trig}, ${echo});\n`;
        var code = `distanceSensor_${trig}.measureDistance${unit}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.thirdParty_rgb = function() {
        var pin = this.getFieldValue('PIN');
        var lednum = Blockly.Arduino.valueToCode(this, 'ALL', Blockly.Arduino.ORDER_ATOMIC);
        var pos=Blockly.Arduino.valueToCode(this, 'POS', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var B = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';

        Blockly.Arduino.definitions_['var_rgb_display' + pin] = `Adafruit_NeoPixel rgbLed_${pin} = Adafruit_NeoPixel(${lednum}, ` +
            `${pin}, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_['setup_rgb_display_setpin' + pin] = `rgbLed_${pin}.begin();\n  rgbLed_${pin}.show();\n`;

        if(pos=='0')
        {
            var code = `for (int ik = 0; ik < ${lednum}; ik++)\nrgbLed_${pin}.setPixelColor(ik, ${R}, ${G}, ${B});\n` + 
                `rgbLed_${pin}.show();\ndelay(1);\n`;
        }
        else
        {
            var code = `rgbLed_${pin}.setPixelColor(${pos}-1, ${R}, ${G}, ${B});\nrgbLed_${pin}.show();\ndelay(1);\n`;
        }
        return code;
    };

    return Blockly;
}
  

exports = addGenerator;
