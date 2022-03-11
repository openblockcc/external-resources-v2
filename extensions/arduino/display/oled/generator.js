/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.oled_init = function (block) {
		const disp = block.getFieldValue('disp');
		const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const addr = block.getFieldValue('ADDR');

        Blockly.Arduino.includes_.oled_init = `#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>`;
        Blockly.Arduino.definitions_.oled_init = `#define OLED_RESET -1`;
		Blockly.Arduino.definitions_[`oled_init_${disp}`] = `Adafruit_SSD1306 ${disp}(${x}, ${y}, &Wire, OLED_RESET);`;

        return `${disp}.begin(SSD1306_SWITCHCAPVCC, ${addr});\n`;
    };
	
	Blockly.Arduino.oled_setFonts = function (block) {
		const disp = block.getFieldValue('disp');
		const fonts = block.getFieldValue('fonts');
	Blockly.Arduino.includes_[`oled_setFonts_${fonts}`] = `#include <Fonts/${fonts}.h>`;
		
		return `${disp}.setFont(&${fonts});\n`;
	};
		
    Blockly.Arduino.oled_drawLine = function (block) {
		const disp = block.getFieldValue('disp');
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.drawLine(${x0}, ${y0}, ${x1}, ${y1}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawRect = function (block) {
		const disp = block.getFieldValue('disp');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.drawRect(${x}, ${y}, ${w}, ${h}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillRect = function (block) {
		const disp = block.getFieldValue('disp');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.fillRect(${x}, ${y}, ${w}, ${h}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawCircle = function (block) {
		const disp = block.getFieldValue('disp');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.drawCircle(${x}, ${y}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillCircle = function (block) {
		const disp = block.getFieldValue('disp');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.fillCircle(${x}, ${y}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawRoundRect = function (block) {
		const disp = block.getFieldValue('disp');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.drawRoundRect(${x}, ${y}, ${w}, ${h}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillRoundRect = function (block) {
		const disp = block.getFieldValue('disp');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.fillRoundRect(${x}, ${y}, ${w}, ${h}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawTriangle = function (block) {
		const disp = block.getFieldValue('disp');
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.drawTriangle(${x0}, ${y0}, ${x1}, ${y1}, ${x2}, ${y2}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillTriangle = function (block) {
		const disp = block.getFieldValue('disp');
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `${disp}.fillTriangle(${x0}, ${y0}, ${x1}, ${y1}, ${x2}, ${y2}, ${colour});\n`;
    };

    Blockly.Arduino.oled_setText = function (block) {
		const disp = block.getFieldValue('disp');
        const size = block.getFieldValue('SIZE');
        const colour = block.getFieldValue('COLOUR');
        const bgColor = block.getFieldValue('BGCOLOR');

        return `${disp}.setTextSize(${size});\n${disp}.setTextColor(${colour}, ${bgColor});\n`;
    };

    Blockly.Arduino.oled_setCursor = function (block) {
		const disp = block.getFieldValue('disp');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

        return `${disp}.setCursor(${x}, ${y});\n`;
    };

    Blockly.Arduino.oled_print = function (block) {
		const disp = block.getFieldValue('disp');
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const eol = block.getFieldValue('EOL');

        if (eol === 'warp') {
            return `${disp}.println(${data});\n`;
        }
        return `${disp}.print(${data});\n`;

    };

    Blockly.Arduino.oled_clear = function (block) {
	const disp = block.getFieldValue('disp');
        return `${disp}.clearDisplay();\n`;
    };

    Blockly.Arduino.oled_refresh = function (block) {
	const disp = block.getFieldValue('disp');
        return `${disp}.display();\n`;
    };

    Blockly.Arduino.oled_startScroll = function (block) {
		const disp = block.getFieldValue('disp');
        const type = block.getFieldValue('TYPE');
        const y0 = block.getFieldValue('Y0');
        const y1 = block.getFieldValue('Y1');

        if (type === '0') {
            return `${disp}.startscrollright(${y0}, ${y1});\n`;
        } else if (type === '1') {
            return `${disp}.startscrollleft(${y0}, ${y1});\n`;
        } else if (type === '2') {
            return `${disp}.startscrolldiagright(${y0}, ${y1});\n`;
        }
        return `${disp}.startscrolldiagleft(${y0}, ${y1});\n`;

    };

    Blockly.Arduino.oled_stopScroll = function (block) {
	const disp = block.getFieldValue('disp');
        return `${disp}.stopscroll();\n`;
    };
	
	Blockly.Arduino.oled_string = function (block) {
        var oledstr = Blockly.Arduino.valueToCode(block, 'oledstr', Blockly.Arduino.ORDER_ATOMIC);
        var oledstr = Blockly.Arduino.valueToCode(block, 'oledstr', Blockly.Arduino.ORDER_ATOMIC);
		oledstr = oledstr.replace(/\"/g, "");
        Blockly.Arduino.definitions_[`oled_${oledstr}`] = `char* ${oledstr};`;
		return [`${oledstr}`, Blockly.Arduino.ORDER_ATOMIC];
    };
	
  Blockly.Arduino.oled_stringeql = function (block) {
		var oledstr = Blockly.Arduino.valueToCode(block, 'oledstr', Blockly.Arduino.ORDER_ATOMIC);
		oledstr = oledstr.replace(/\"/g, "");
        var oledstreq = Blockly.Arduino.valueToCode(block, 'oledstreq', Blockly.Arduino.ORDER_ATOMIC);
		return `${oledstr} = ${oledstreq};\n`;
    };

    return Blockly;
}

exports = addGenerator;
