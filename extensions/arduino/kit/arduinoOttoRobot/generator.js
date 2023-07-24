/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.otto_initPins = function () {
        const leftleg = this.getFieldValue('PIN_LEFTLEG');
        const rightleg = this.getFieldValue('PIN_RIGHTLEG');
        const leftfoot = this.getFieldValue('PIN_LEFTFOOT');
        const rightfoot = this.getFieldValue('PIN_RIGHTFOOT');
        const buzzer = this.getFieldValue('PIN_BUZZER');
        Blockly.Arduino.definitions_.define_OttoHeader = '#include <Otto.h>';
        Blockly.Arduino.definitions_.define_leftleg = `#define LEFTLEG ${leftleg}`;
        Blockly.Arduino.definitions_.define_rightleg = `#define RIGHTLEG ${rightleg}`;
        Blockly.Arduino.definitions_.define_leftfoot = `#define LEFTFOOT ${leftfoot}`;
        Blockly.Arduino.definitions_.define_rightfoot = `#define RIGHTFOOT ${rightfoot}`;
        Blockly.Arduino.definitions_.define_trig = `#define TRIG 8`;
        Blockly.Arduino.definitions_.define_echo = `#define ECHO 9`;
        Blockly.Arduino.definitions_.define_buzzer = `#define BUZZER ${buzzer}`;
        Blockly.Arduino.definitions_.define_Otto = `Otto Otto;`;
        var code = `Otto.init(LEFTLEG, RIGHTLEG, LEFTFOOT, RIGHTFOOT, true, BUZZER);\n`;
        code += 'Otto.home();\n';
        return code;
    };

    Blockly.Arduino.otto_home = function () {
        return 'Otto.home();\n';
    };

    Blockly.Arduino.otto_move = function () {
        const movemode = this.getFieldValue('MOVE_MODE');
        const movespeed = this.getFieldValue('MOVE_SPEED');

        var code;
        if(movemode == 'forward')
            code = `Otto.walk(1, ${movespeed}, 1);`;
        else if(movemode == 'backward')
            code = `Otto.walk(1, ${movespeed}, -1);`;
        else if(movemode == 'turnleft')
            code = `Otto.turn(1, ${movespeed}, 1);`;
        else if(movemode == 'turnright')
            code = `Otto.turn(1, ${movespeed}, -1);`;
        else if(movemode == 'bendleft')
            code = `Otto.bend(1, ${movespeed}, 1);`;
        else if(movemode == 'bendright')
            code = `Otto.bend(1, ${movespeed}, -1);`;
        else if(movemode == 'shakeleft')
            code = `Otto.shakeLeg(1, ${movespeed}, 1);`;
        else if(movemode == 'shakeright')
            code = `Otto.shakeLeg(1, ${movespeed}, -1);`;
        else if(movemode == 'up')
            code = `Otto.jump(1, ${movespeed});`;
        return code+'\n';
    };

    Blockly.Arduino.otto_dance = function () {
        const dancemode = this.getFieldValue('DANCE_MODE');
        const dancespeed = this.getFieldValue('DANCE_SPEED');
        const dancesize = this.getFieldValue('DANCE_SIZE');

        var code;
        if(dancemode == 'moonwalkleft')
            code = `Otto.moonwalker(1, ${dancespeed}, ${dancesize}, 1);`;
        else if(dancemode == 'moonwalkright')
            code = `Otto.moonwalker(1, ${dancespeed}, ${dancesize}, -1);`;
        else if(dancemode == 'crossingleft')
            code = `Otto.crusaito(1, ${dancespeed}, ${dancesize}, 1);`;
        else if(dancemode == 'crossingright')
            code = `Otto.crusaito(1, ${dancespeed}, ${dancesize}, -1);`;
        else if(dancemode == 'flappingup')
            code = `Otto.flapping(1, ${dancespeed}, ${dancesize}, 1);`;
        else if(dancemode == 'flappingdown')
            code = `Otto.flapping(1, ${dancespeed}, ${dancesize}, -1);`;
        return code+'\n';
    };

    Blockly.Arduino.otto_do_behavior = function () {
        const domode = this.getFieldValue('DO_MODE');
        const dospeed = this.getFieldValue('DO_SPEED');
        const dosize = this.getFieldValue('DO_SIZE');

        var code = `Otto.${domode}(1, ${dospeed}, ${dosize});\n`;
        return code;
    };

    Blockly.Arduino.otto_do_gesture = function () {
        const dogesture = this.getFieldValue('DO_GESTURE');

        var code = `Otto.playGesture(${dogesture});\n`;
        return code;
    };

    return Blockly;
}


exports = addGenerator;
