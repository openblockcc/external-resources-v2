/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#0d7d23';
	//const secondaryColour = '#0d7d23';

    Blockly.Blocks.adafruitIO_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_BEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'aiossid'
                }, {
                    type: 'input_value',
                    name: 'aiopswd'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.adafruitIO_userid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_USERID,
                args0: [{
                    type: 'input_value',
                    name: 'aiouserid'
                },
                {
                    type: 'input_value',
                    name: 'aiokey'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.adafruitIO_run = {
		init: function (){
			this.jsonInit({
				message0: Blockly.Msg.ADAFRUITIO_RUN,
				args0: [],
				colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.adafruitIO_receive = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_RECEIVE,
                args0: [{
                    type: 'input_value',
                    name: 'aioin'
                },
				{
					type: 'field_dropdown',
                        name: 'data_type',
                        options: [
                            ['integer','toInt'],
                            ['string','toString'],
							['decimal','toDouble']]
				},
                {
                    type: 'input_value',
                    name: 'aiofeed'
                },
                {
                    type: 'input_value',
                    name: 'aiofeedname'
                }],
                colour: color,
				//secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.adafruitIO_send = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_SEND,
                args0: [{
                    type: 'input_value',
                    name: 'aioout'
                },
				{
					type: 'field_dropdown',
                        name: 'data_type',
                        options: [
                            ['integer','int'],
                            ['string','String'],
							['decimal','double']]
				},
                {
                    type: 'input_value',
                    name: 'aiofeed'
                },
                {
                    type: 'input_value',
                    name: 'aiofeedname'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.adafruitIO_string = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_STRING,
                args0: [{
                    type: 'input_value',
                    name: 'aiostr'
                }],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

	Blockly.Blocks.adafruitIO_stringeql = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADAFRUITIO_STRINGEQL,
                args0: [{
                    type: 'input_value',
                    name: 'aiostr'
                },
				{
                    type: 'input_value',
                    name: 'aiostreq'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    

    return Blockly;
}

exports = addBlocks;
