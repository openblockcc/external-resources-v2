/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
<category name="%{BKY_ARDUINOOTTOROBOT_CATEGORY}" id="ARDUINOOTTOROBOT_CATEGORY" colour="#00d845" secondaryColour="#42CCFF">
    <block type="otto_initPins">
        <field name="PIN_LEFTLEG">2</field>
        <field name="PIN_RIGHTLEG">3</field>
        <field name="PIN_LEFTFOOT">4</field>
        <field name="PIN_RIGHTFOOT">5</field>
        <field name="PIN_BUZZER">13</field>
    </block>
    <block type="otto_home"></block>
    <block type="otto_move"></block>
    <block type="otto_dance"></block>
    <block type="otto_do_behavior"></block>
    <block type="otto_do_gesture"></block>
</category>
`;


}

exports = addToolbox;
