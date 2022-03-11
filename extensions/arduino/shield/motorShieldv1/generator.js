/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Arduino.motorShieldv1_run = function (block) {
        const motor = this.getFieldValue('motor');
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
        const direction = this.getFieldValue('direction');
        Blockly.Arduino.includes_.motorShieldv1_run = `#include "AFMotor.h"`;
        Blockly.Arduino.definitions_[`motorShieldv1_run_${motor}`] = `AF_DCMotor motor${motor}(${motor});`;
        return `motor${motor}.setSpeed(${speed});\nmotor${motor}.run(${direction});\n`;
    };

    Blockly.Arduino.motorShieldv1_stop = function (block) {
        const motor = this.getFieldValue('motor');
        Blockly.Arduino.includes_.motorShieldv1_run = `#include "AFMotor.h"`;
        Blockly.Arduino.definitions_[`motorShieldv1_run_${motor}`] = `AF_DCMotor motor${motor}(${motor});`;
        return `motor${motor}.run(RELEASE);\n`;
    };
	
	Blockly.Arduino.motorShieldv1_servo = function (block) {
        const servo = this.getFieldValue('servo');
		const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.includes_.motorShieldv1_servo = `#include "Servo.h"`;
        Blockly.Arduino.definitions_[`motorShieldv1_${servo}`] = `Servo ${servo};`;
		if(servo == 'servo1'){
        Blockly.Arduino.setups_[`motorShieldv1_${servo}`]=`${servo}.attach(10);`;
		}else{
		Blockly.Arduino.setups_[`motorShieldv1_${servo}`]=`${servo}.attach(9);`;
		}	
		return `${servo}.write(${angle});\n`;
    };

    Blockly.Arduino.motorShieldv1_stepInit = function (block) {
        const motor = this.getFieldValue('motor');
        const steps = Blockly.Arduino.valueToCode(block, 'steps', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.motorShieldv1_run = `#include "AFMotor.h"`;
        Blockly.Arduino.definitions_[`motorShieldv1_stepInit_${motor}`] = `AF_Stepper stepper${motor}(${steps}, ${motor});`;
        return '';
    };
	
	Blockly.Arduino.motorShieldv1_speed = function (block) {
        const motor = this.getFieldValue('motor');
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
        return `stepper${motor}.setSpeed(${speed});\n`;
    };

    Blockly.Arduino.motorShieldv1_stepRun = function (block) {
        const motor = this.getFieldValue('motor');
        const steps = Blockly.Arduino.valueToCode(block, 'steps', Blockly.Arduino.ORDER_ATOMIC);
        const direction = this.getFieldValue('direction');
        const style = this.getFieldValue('style');
        Blockly.Arduino.includes_.motorShieldv1_run = `#include "AFMotor.h"`;
        return `stepper${motor}.step(${steps}, ${direction}, ${style});\n`;
    };

    Blockly.Arduino.motorShieldv1_accelStepper = function (block) {
        const motor = this.getFieldValue('motor');
        const style = this.getFieldValue('style');
        Blockly.Arduino.includes_.motorShieldv1_accel = `#include "AccelStepper.h"`;
        Blockly.Arduino.customFunctions_[`motorShieldv1_stepper${motor}`] = `void forwardstep${motor}(){
	stepper${motor}.onestep(FORWARD, ${style});
}
void backwardstep${motor}(){
	stepper${motor}.onestep(BACKWARD, ${style});
}
AccelStepper accelStepper${motor}(forwardstep${motor}, backwardstep${motor});\n`;
        return '';
    };
	
	Blockly.Arduino.motorShieldv1_setMaxSpeed = function (block) {
        const motor = this.getFieldValue('motor');
        const maxSpeed = Blockly.Arduino.valueToCode(block, 'maxSpeed', Blockly.Arduino.ORDER_ATOMIC);
        return `accelStepper${motor}.setMaxSpeed(${maxSpeed});\n`;
    };
	
	Blockly.Arduino.motorShieldv1_setAcceleration = function (block) {
        const motor = this.getFieldValue('motor');
        const setAcceleration = Blockly.Arduino.valueToCode(block, 'setAcceleration', Blockly.Arduino.ORDER_ATOMIC);
        return `accelStepper${motor}.setAcceleration(${setAcceleration});\n`;
    };
	
	Blockly.Arduino.motorShieldv1_moveTo = function (block) {
        const motor = this.getFieldValue('motor');
        const moveTo = Blockly.Arduino.valueToCode(block, 'moveTo', Blockly.Arduino.ORDER_ATOMIC);
        return `accelStepper${motor}.moveTo(${moveTo});\n`;
    };
	
	Blockly.Arduino.motorShieldv1_setSpeed = function (block) {
        const motor = this.getFieldValue('motor');
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
        return `accelStepper${motor}.setSpeed(${speed});\n`;
    };
	
	Blockly.Arduino.motorShieldv1_getDistance = function (block) {
        const motor = this.getFieldValue('motor');
        return [`accelStepper${motor}.distanceToGo()`,Blockly.Arduino.ORDER_ATOMIC];
    };
	
	Blockly.Arduino.motorShieldv1_currentPosition = function (block) {
        const motor = this.getFieldValue('motor');
        return [`accelStepper${motor}.currentPosition()`,Blockly.Arduino.ORDER_ATOMIC];
    };
	
	Blockly.Arduino.motorShieldv1_accelRun = function (block) {
        const motor = this.getFieldValue('motor');
        return `accelStepper${motor}.run();\n`;
    };
	
	Blockly.Arduino.motorShieldv1_accelRunSpeed = function (block) {
        const motor = this.getFieldValue('motor');
        return `accelStepper${motor}.runSpeed();\n`;
    };
		
    return Blockly;
}

exports = addGenerator;
