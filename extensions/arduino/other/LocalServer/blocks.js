/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#f00a5e';

    Blockly.Blocks.localServer_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_BEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'locssid'
                }, {
                    type: 'input_value',
                    name: 'locpswd'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.localServer_apbegin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_APBEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'locssid'
                }, {
                    type: 'input_value',
                    name: 'locpswd'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.localServer_getRequest = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_GETREQUEST,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.localServer_chkRequest = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_CHKREQUEST,
                args0: [{
                    type: 'input_value',
                    name: 'request'
                }],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.localServer_clientFlush = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_CLIENTFLUSH,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.localServer_htmlInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_HTMLINIT,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.localServer_clientEmpty = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_CLIENTEMPTY,
                args0: [{
                    type: 'input_value',
                    name: 'cli_data'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.localServer_guiButton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_GUIBUTTON,
                args0: [{
                    type: 'input_value',
                    name: 'req_cmd'
                }, {
                    type: 'input_value',
                    name: 'BtText'
                },
                {
                    type: 'field_dropdown',
                    name: 'warp',
                    options:[
                    ['Space','&nbsp'],
                    ['NewLine','<br><br>'] 
                    ]
                }
            ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.localServer_htmlEnd = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LOCALSERVER_HTMLEND,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
