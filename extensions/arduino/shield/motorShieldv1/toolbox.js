/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MOTORSHIELDV1_CATEGORY}" id="MOTORSHIELDV1_CATEGORY" colour="#33ccff" secondaryColour="#33ccff">
    <block type="motorShieldv1_run" id="motorShieldv1_run">
	<value name="speed">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="motorShieldv1_stop" id="motorShieldv1_stop">
    </block>
	<label text="Servo Motor"></label>
	<block type="motorShieldv1_servo" id="motorShieldv1_servo">
	<value name="angle">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
	</block>
	<label text="Stepper Motor"></label>
	<block type="motorShieldv1_stepInit" id="motorShieldv1_stepInit">
	<value name="steps">
            <shadow type="math_number">
                <field name="NUM">48</field>
            </shadow>
        </value>
	</block>
	<block type="motorShieldv1_speed" id="motorShieldv1_speed">
		<value name="speed">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
	<block type="motorShieldv1_stepRun" id="motorShieldv1_stepRun">
	<value name="steps">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
	<label text="AccelStepper"></label>
	<block type="motorShieldv1_accelStepper" id="motorShieldv1_accelStepper">
	</block>
	<block type="motorShieldv1_setMaxSpeed" id="motorShieldv1_setMaxSpeed">
	<value name="maxSpeed">
            <shadow type="math_number">
                <field name="NUM">300</field>
            </shadow>
        </value>
	</block>
	<block type="motorShieldv1_setAcceleration" id="motorShieldv1_setAcceleration">
	<value name="setAcceleration">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
	</block>
	<block type="motorShieldv1_moveTo" id="motorShieldv1_moveTo">
	<value name="moveTo">
            <shadow type="math_number">
                <field name="NUM">100000</field>
            </shadow>
        </value>
    </block>
	<block type="motorShieldv1_setSpeed" id="motorShieldv1_setSpeed">
	<value name="speed">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
	<block type="motorShieldv1_getDistance" id="motorShieldv1_getDistance">
	</block>
	<block type="motorShieldv1_currentPosition" id="motorShieldv1_currentPosition">
	</block>
	<block type="motorShieldv1_accelRun" id="motorShieldv1_accelRun">
	</block>
	<block type="motorShieldv1_accelRunSpeed" id="motorShieldv1_accelRunSpeed">
	</block>
</category>`;
}

exports = addToolbox;
