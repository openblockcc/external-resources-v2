/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        OLED_CATEGORY: 'OLED',
        OLED_INIT: 'init %1 width %2 height %3 I2C address %4',
		OLED_SETFONTS: 'set %1 Font %2', 
        OLED_DRAWLINE: 'draw %1 line x0: %2 y0: %3, x1: %4 y1：%5color %6',
        OLED_COLOR_WHITE: 'white',
        OLED_COLOR_BLACK: 'black',
        OLED_COLOR_INVERSE: 'inverse',
        OLED_DRAWRECT: 'draw %1 rect x: %2 y: %3 width %4 height %5 color %6',
        OLED_FILLRECT: 'fill %1 rect x: %2 y: %3 width %4 height %5 color %6',
        OLED_DRAWCIRCLE: 'draw %1 circle x: %2 y: %3 radius %4 color %5',
        OLED_FILLCIRCLE: 'fill %1 circle x: %2 y: %3 radius %4 color %5',
        OLED_DRAWROUNDRECT: 'draw %1 round rect x: %2 y: %3 width %4 height %5 radius %6 color %7',
        OLED_FILLROUNDRECT: 'fill %1 round rect x: %2 y: %3 width %4 height %5 radius %6 color %7',
        OLED_DRAWTRIANGLE: 'draw %1 triangle x0: %2 y0: %3, x1: %4 y1: %5, x2: %6 y2: %7 color %8',
        OLED_FILLTRIANGLE: 'fill %1 triangle x0: %2 y0: %3, x1: %4 y1: %5, x2: %6 y2: %7 color %8',
        OLED_SETTEXT: 'set %1 text size %2 color %3 background color %4',
        OLED_SETCURSOR: 'set %1 cursor x: %2 y: %3',
        OLED_PRINT: 'print %1 %2 %3',
        OLED_EOL_WARP: 'warp',
        OLED_EOL_NOWARP: 'no-warp',
        OLED_CLEAR: 'clear %1',
        OLED_REFRESH: 'refresh %1 display',
        OLED_STARTSCROLL: 'start %1 scroll %2 y0: %3 y1: %4',
        OLED_SCROLL_RIGHT: 'right',
        OLED_SCROLL_LEFT: 'left',
        OLED_SCROLL_DIAGRIGHT: 'diag right',
        OLED_SCROLL_DIAGLEFT: 'diag left',
        OLED_STOPSCROLL: 'stop %1 scroll',
		OLED_STRING: 'String Variable %1',
		OLED_STRINGEQL: 'Assign %1 = %2'
    });
    return Blockly;
}

exports = addMsg;
