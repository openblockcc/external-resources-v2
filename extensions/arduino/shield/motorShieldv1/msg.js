/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MOTORSHIELDV1_CATEGORY: 'Motor shield',
        MOTORSHIELDV1_RUN: 'Run %1 speed %2 direction %3',
        MOTORSHIELDV1_STOP: 'Stop %1',
		MOTORSHIELDV1_STEPINIT: 'Initialize %1 steps per revolution %2',
		MOTORSHIELDV1_SPEED: 'Set %1 speed %2',
		MOTORSHIELDV1_STEPRUN: 'Run %1 steps %2 direction %3 style %4',
		MOTORSHIELDV1_ACCELSTEPPER: 'Initialize %1 style %2',
		MOTORSHIELDV1_SETMAXSPEED: 'Set %1 maxSpeed %2',
		MOTORSHIELDV1_SETACCELERATION: 'Set %1 acceleration %2',
		MOTORSHIELDV1_MOVETO: 'Move %1 to %2',
		MOTORSHIELDV1_SETSPEED: 'Set %1 constant speed %2',
		MOTORSHIELDV1_GETDISTANCE: 'Get %1 distance to go',
		MOTORSHIELDV1_CURRENTPOSITION: 'Get %1 current position',
		MOTORSHIELDV1_ACCELRUN: 'Run %1',
		MOTORSHIELDV1_ACCELRUNSPEED: 'Run %1 constant speed',
		MOTORSHIELDV1_SERVO: 'Set %1 angle %2'
    });
    return Blockly;
}

exports = addMsg;
