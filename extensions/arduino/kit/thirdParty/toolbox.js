/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    
    return `
<category name="%{BKY_DEMO_MODULE_CATEGORY}" id="DEMO_MODULE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="thirdParty_button"></block>
    <block type="thirdParty_ultrasonic"></block>
    <block type="thirdParty_rgb">
        <value name="ALL">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="POS">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>
`;

}

exports = addToolbox;
