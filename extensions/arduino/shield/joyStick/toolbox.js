/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_JOYSTICK_CATEGORY}" id="JOYSTICK_CATEGORY" colour="#FF0000" secondaryColour="#FF0000">
    <block type="joyStick_init" id="joyStick_init">
    </block>
    <block type="joyStick_buttons" id="joyStick_buttons">
    </block>
	<block type="joyStick_position" id="joyStick_position">
	</block>
	<block type="joyStick_xypos" id="joyStick_xypos">
	</block>
    
</category>`;
}

exports = addToolbox;
