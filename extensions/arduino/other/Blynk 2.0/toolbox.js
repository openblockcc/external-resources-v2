/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
	<category name="%{BKY_BLYNK_CATEGORY}" id="BLYNK_CATEGORY" colour="#23be8a" secondaryColour="#23be8a" >
    <block type="Blynk_templateid" id="Blynk_templateid">
        <value name="blynktempid">
            <shadow type="text">
                <field name="TEXT">Template ID</field>
            </shadow>
        </value>
        <value name="blynkdname">
            <shadow type="text">
                <field name="TEXT">Device Name</field>
            </shadow>
        </value>
    </block>
	<block type="Blynk_begin" id="Blynk_begin">
	<field name="baudrate">115200</field>
    </block>
	<block type="Blynk_userid" id="Blynk_userid">
        <value name="blynkssid">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="blynkpass">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
		<value name="blynkauth">
            <shadow type="text">
                <field name="TEXT">Auth Token</field>
            </shadow>
        </value>
    </block>
	
	<block type="Blynk_start" id="Blynk_start">
    </block>
    
	<block type="Blynk_receive" id="Blynk_receive">
        <value name="blynkin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="vpin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
	
    <block type="Blynk_send" id="Blynk_send">
        <value name="blynkout">
            <shadow type="text">
                <field name="TEXT">0</field>
            </shadow>
        </value>
        <value name="vpin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="msec">
            <shadow type="math_number">
                <field name="NUM">1000</field>
            </shadow>
        </value>
    </block>
	
	<block type="Blynk_string" id="Blynk_string">
        <value name="blynkstr">
            <shadow type="text">
                <field name="TEXT">string_data</field>
            </shadow>
        </value>
    </block>
	
	<block type="Blynk_stringeql" id="Blynk_stringeql">
        <value name="blynkstr">
            <block type="Blynk_string" id="Blynk_string">
        <value name="blynkstr">
            <shadow type="text">
                <field name="TEXT">string_data</field>
            </shadow>
        </value>
    </block>
        </value>
		<value name="blynkstreq">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
    </block>
    
    
</category>`;
}

exports = addToolbox;
