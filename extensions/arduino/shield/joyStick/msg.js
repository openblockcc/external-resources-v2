/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        JOYSTICK_CATEGORY: 'joyStick',
        JOYSTICK_INIT: 'Run joyStick event',
        JOYSTICK_BUTTONS: '%1 Button is pressed',
		JOYSTICK_POSITION: 'joyStick moves to %1',
		JOYSTICK_XYPOS: 'read joyStick %1 position'
    });
    return Blockly;
}

exports = addMsg;
