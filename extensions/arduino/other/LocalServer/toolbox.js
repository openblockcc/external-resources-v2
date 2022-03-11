/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LOCALSERVER_CATEGORY}" id="LOCALSERVER_CATEGORY" colour="#f00a5e" secondaryColour="#f00a5e">
    <block type="localServer_begin" id="localServer_begin">
        <value name="locssid">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="locpswd">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>
    
    <block type="localServer_apbegin" id="localServer_apbegin">
        <value name="locssid">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="locpswd">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>

    <block type="localServer_getRequest" id="localServer_getRequest">
    </block>
    
    <block type="localServer_chkRequest" id="localServer_chkRequest">
    <value name="request">
            <shadow type="text">
                <field name="TEXT">LedOn</field>
            </shadow>
        </value>
    </block>

    <block type="localServer_clientFlush" id="localServer_clientFlush">
    </block>

    <block type="localServer_htmlInit" id="localServer_htmlInit">
    </block>

    <block type="localServer_clientEmpty" id="localServer_clientEmpty">
    <value name="cli_data">
            <shadow type="text">
                <field name="TEXT"> </field>
            </shadow>
    </value>
    </block>

    <block type="localServer_guiButton" id="localServer_guiButton">
    <value name="req_cmd">
            <shadow type="text">
                <field name="TEXT">LedOn</field>
            </shadow>
    </value>
    <value name="BtText">
        <shadow type="text">
            <field name="TEXT">Turn on Button</field>
        </shadow>
    </value>
    <value name="warp">
        <shadow type="text">
            <field name="TEXT">Space</field>
        </shadow>
    </value>
    </block>

    <block type="localServer_htmlEnd" id="localServer_htmlEnd">
    </block>

</category>`;
}

exports = addToolbox;
