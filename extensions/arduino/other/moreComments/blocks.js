/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#529955';
    const secondaryColour = '#457F48';

    Blockly.Blocks.moreComments_commandBlock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MORECOMMENTS_COMMANDBLOCK,
                args0: [{
                    type: 'input_value',
                    name: 'COMMENTS'
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.moreComments_branchBlock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MORECOMMENTS_BRANCHBLOCK,
                "message1": "%1",
                args0: [{
                    type: 'input_value',
                    name: 'COMMENTS'
                }],
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
