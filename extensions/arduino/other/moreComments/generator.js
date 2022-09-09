/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.moreComments_commandBlock = function (block) {
        const comments = Blockly.Arduino.valueToCode(block, 'COMMENTS', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);

        const code = `// ${comments}\n`;

        return code;
    };

    Blockly.Arduino.moreComments_branchBlock = function (block) {
        const comments = Blockly.Arduino.valueToCode(block, 'COMMENTS', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');

        let code = `// ${comments}\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `// End of ${comments}\n`

        return code;
    };

    return Blockly;
}

exports = addGenerator;
