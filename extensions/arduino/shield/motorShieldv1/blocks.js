/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const color = '#33ccff';
    //const secondaryColour = '#0d7d23';

    Blockly.Blocks.motorShieldv1_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_RUN,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['Motor1', '1'],
                            ['Motor2', '2'],
                            ['Motor3', '3'],
                            ['Motor4', '4']]
				},
				{
                        type: 'input_value',
                        name: 'speed'
                },
				{
                        type: 'field_dropdown',
                        name: 'direction',
						options: [
						['FORWARD', 'FORWARD'],
						['BACKWARD', 'BACKWARD']]
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_stop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_STOP,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['Motor1', '1'],
                            ['Motor2', '2'],
                            ['Motor3', '3'],
                            ['Motor4', '4']]
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
		
	Blockly.Blocks.motorShieldv1_stepInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_STEPINIT,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['Stepper1', '1'],
                            ['Stepper2', '2']]
				},
				{
                        type: 'input_value',
                        name: 'steps'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_speed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_SPEED,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['Stepper1', '1'],
                            ['Stepper2', '2']]
				},
				{
                        type: 'input_value',
                        name: 'speed'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_stepRun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_STEPRUN,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['Stepper1', '1'],
                            ['Stepper2', '2']]
				},
				{
                        type: 'input_value',
                        name: 'steps'
                },
				{
                        type: 'field_dropdown',
                        name: 'direction',
                        options: [
                            ['FORWARD', 'FORWARD'],
                            ['BACKWARD', 'BACKWARD']]
				},
				{
                        type: 'field_dropdown',
                        name: 'style',
                        options: [
                            ['SINGLE', 'SINGLE'],
                            ['DOUBLE', 'DOUBLE'],
                            ['INTERLEAVE', 'INTERLEAVE'],
                            ['MICROSTEP', 'MICROSTEP']]
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_accelStepper = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_ACCELSTEPPER,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				},
				{
                        type: 'field_dropdown',
                        name: 'style',
                        options: [
                            ['SINGLE', 'SINGLE'],
                            ['DOUBLE', 'DOUBLE'],
                            ['INTERLEAVE', 'INTERLEAVE'],
                            ['MICROSTEP', 'MICROSTEP']]
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_setMaxSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_SETMAXSPEED,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				},
				{
                        type: 'input_value',
                        name: 'maxSpeed'
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_setAcceleration = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_SETACCELERATION,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				},
				{
                        type: 'input_value',
                        name: 'setAcceleration'
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_moveTo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_MOVETO,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				},
				{
                        type: 'input_value',
                        name: 'moveTo'
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
		
	Blockly.Blocks.motorShieldv1_setSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_SETSPEED,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				},
				{
                        type: 'input_value',
                        name: 'speed'
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_getDistance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_GETDISTANCE,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				}],
                colour: color,
                extensions: ['output_number']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_currentPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_CURRENTPOSITION,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				}],
                colour: color,
                extensions: ['output_number']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_accelRun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_ACCELRUN,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_accelRunSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_ACCELRUNSPEED,
                args0: [{
                        type: 'field_dropdown',
                        name: 'motor',
                        options: [
                            ['AccelStepper1', '1'],
                            ['AccelStepper2', '2']]
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.motorShieldv1_servo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTORSHIELDV1_SERVO,
                args0: [{
                        type: 'field_dropdown',
                        name: 'servo',
                        options: [
                            ['servo1', 'servo1'],
                            ['servo2', 'servo2']]
				},
				{
					type: 'input_value',
					name: 'angle'
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	return Blockly;
    }

    exports = addBlocks;
