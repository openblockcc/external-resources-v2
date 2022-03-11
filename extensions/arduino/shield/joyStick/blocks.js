/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const color = '#FF0000';
    //const secondaryColour = '#0d7d23';

    Blockly.Blocks.joyStick_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOYSTICK_INIT,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.joyStick_buttons = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOYSTICK_BUTTONS,
                args0: [{
                        type: 'field_dropdown',
                        name: 'buttonState',
                        options: [
                            ['Joystick', 'isJoystickButton'],
                            ['Up', 'isUpButton'],
                            ['Right', 'isRightButton'],
                            ['Down', 'isDownButton'],
                            ['Left', 'isLeftButton'],
                            ['E', 'isEButton'],
                            ['F', 'isFButton']]
				}],
                    colour: color,
                    extensions: ['output_boolean']
                });
            }
        };
		
		Blockly.Blocks.joyStick_position = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOYSTICK_POSITION,
                args0: [{
                        type: 'field_dropdown',
                        name: 'position',
                        options: [
                            ['Up', 'isUp'],
                            ['Right Up', 'isRightUp'],
                            ['Right', 'isRight'],
                            ['Right Down', 'isRightDown'],
                            ['Down', 'isDown'],
                            ['Left Down', 'isLeftDown'],
                            ['Left', 'isLeft'],
                            ['Left Up', 'isUpLeft'],
							['Not Center', 'isNotCenter']]
				}],
                    colour: color,
                    extensions: ['output_boolean']
                });
            }
        };
		
		Blockly.Blocks.joyStick_xypos = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.JOYSTICK_XYPOS,
                    args0: [{
                            type: 'field_dropdown',
                            name: 'xypos',
							options: [
							['X', 'xAmplitude'],
							['Y', 'yAmplitude']]
                        }
                    ],
                    colour: color,
                    extensions: ['output_number']
                });
            }
        };

        return Blockly;
    }

    exports = addBlocks;
