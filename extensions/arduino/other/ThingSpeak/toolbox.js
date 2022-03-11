/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_THINGSPEAK_CATEGORY}" id="THINGSPEAK_CATEGORY" colour="#2f7eb2" secondaryColour="#2f7eb2">
    <block type="ThingSpeak_begin" id="ThingSpeak_begin">
        <value name="tsssid">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="tspswd">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>
    
    <block type="ThingSpeak_userid" id="ThingSpeak_userid">
        <value name="tsuserid">
            <shadow type="math_number">
                <field name="NUM">123456</field>
            </shadow>
        </value>
        <value name="apikey">
            <shadow type="text">
                <field name="TEXT">API KEY</field>
            </shadow>
        </value>
    </block>
    
    <block type="ThingSpeak_send" id="ThingSpeak_send">
        <value name="tsout">
            <shadow type="math_number">
                <field name="NUM">300</field>
            </shadow>
        </value>
        <value name="tsfield">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

	<block type="ThingSpeak_push" id="ThingSpeak_push"></block>
	
	<block type="ThingSpeak_multi" id="ThingSpeak_multi">
        <value name="tsmout">
            <shadow type="math_number">
                <field name="NUM">300</field>
            </shadow>
        </value>
        <value name="tsmfield">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
	
	
	<block type="ThingSpeak_status" id="ThingSpeak_status">
        <value name="tsstatus">
            <shadow type="text">
                <field name="TEXT">Type Status</field>
            </shadow>
        </value>
    </block>
    
</category>`;
}

exports = addToolbox;
