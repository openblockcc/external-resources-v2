/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Python.ultrasonic_readDistance = function (block) {
        const trig = block.getFieldValue('TRIG');
        const echo = block.getFieldValue('ECHO');
        const unit = block.getFieldValue('UNIT');

        Blockly.Python.imports_.ultrasonic_readDistance = `from hcsr04_v0_2_1 import HCSR04`;
        Blockly.Python.variables_[`ultrasonic_${trig}_${echo}`] =
            `ultrasonic_${trig}_${echo} = HCSR04(trigger_pin = ${trig}, echo_pin = ${echo})`;

        if (unit === 'CM') {
            return [`ultrasonic_${trig}_${echo}.distance_cm()`, Blockly.Python.ORDER_ATOMIC];
        }
        return [`ultrasonic_${trig}_${echo}.distance_mm()`, Blockly.Python.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
