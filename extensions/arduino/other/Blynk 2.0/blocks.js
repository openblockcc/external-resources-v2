/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#23be8a';
	
    Blockly.Blocks.Blynk_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_BEGIN,
                args0: [{
                        type: 'field_dropdown',
                        name: 'baudrate',
                        options: [
                            ['4800', '4800'],
                            ['9600', '9600'],
                            ['19200', '19200'],
                            ['38400', '38400'],
                            ['57600', '57600'],
                            ['115200', '115200']]
                    }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Blynk_templateid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_TEMPLATEID,
                args0: [{
                    type: 'input_value',
                    name: 'blynktempid'
                },
                {
                    type: 'input_value',
                    name: 'blynkdname'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	
	Blockly.Blocks.Blynk_userid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_USERID,
                args0: [{
                    type: 'input_value',
                    name: 'blynkssid'
                },
                {
                    type: 'input_value',
                    name: 'blynkpass'
                },
                {
                    type: 'input_value',
                    name: 'blynkauth'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	Blockly.Blocks.Blynk_start = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_START,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.Blynk_receive = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_RECEIVE,
                args0: [{
                    type: 'input_value',
                    name: 'blynkin'
                },
                {
                    type: 'input_value',
                    name: 'vpin'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Blynk_send = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_SEND,
                args0: [{
                    type: 'input_value',
                    name: 'blynkout'
                },
                {
                    type: 'input_value',
                    name: 'vpin'
                },
                {
                    type: 'input_value',
                    name: 'msec'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.Blynk_string = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_STRING,
                args0: [{
                    type: 'input_value',
                    name: 'blynkstr'
                }],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

	Blockly.Blocks.Blynk_stringeql = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BLYNK_STRINGEQL,
                args0: [{
                    type: 'input_value',
                    name: 'blynkstr'
                },
				{
                    type: 'input_value',
                    name: 'blynkstreq'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    

    return Blockly;
}

exports = addBlocks;
