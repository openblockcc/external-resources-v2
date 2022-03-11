/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#2f7eb2';

    Blockly.Blocks.ThingSpeak_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSPEAK_BEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'tsssid'
                }, {
                    type: 'input_value',
                    name: 'tspswd'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ThingSpeak_userid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSPEAK_USERID,
                args0: [{
                    type: 'input_value',
                    name: 'tsuserid'
                },
                {
                    type: 'input_value',
                    name: 'apikey'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
    Blockly.Blocks.ThingSpeak_send = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSPEAK_SEND,
                args0: [{
                    type: 'input_value',
                    name: 'tsout'
                },
                {
                    type: 'field_dropdown',
                    name: 'tsfield',
					options:
					[['1','1'],
					['2','2'],
					['3','3'],
					['4','4'],
					['5','5'],
					['6','6'],
					['7','7'],
					['8','8']]
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.ThingSpeak_push = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSPEAK_PUSH,
                args0: [{
                    type: 'input_dummy'
                },
                {
                    type: 'input_statement',
                    name: 'tsmdata'
                }],
				"tooltip": "Send MultiField data",
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.ThingSpeak_multi = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSPEAK_MULTI,
                args0: [{
                    type: 'input_value',
                    name: 'tsmout'
                },
                {
                    type: 'field_dropdown',
                    name: 'tsmfield',
					options:
					[['1','1'],
					['2','2'],
					['3','3'],
					['4','4'],
					['5','5'],
					['6','6'],
					['7','7'],
					['8','8']]
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
		
	Blockly.Blocks.ThingSpeak_status = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSPEAK_STATUS,
                args0: [{
                    type: 'input_value',
                    name: 'tsstatus'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
