/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#6666ff';
    const secondaryColour = '#A9A9A9';
	
	var fonts_Dropdown = [
   ['FreeMono12pt7b','FreeMono12pt7b'],
   ['FreeMono18pt7b','FreeMono18pt7b'],
   ['FreeMono24pt7b','FreeMono24pt7b'],
   ['FreeMono9pt7b','FreeMono9pt7b'],
   ['FreeMonoBold12pt7b','FreeMonoBold12pt7b'],
   ['FreeMonoBold18pt7b','FreeMonoBold18pt7b'],
   ['FreeMonoBold24pt7b','FreeMonoBold24pt7b'],
   ['FreeMonoBold9pt7b','FreeMonoBold9pt7b'],
   ['FreeMonoBoldOblique12pt7b','FreeMonoBoldOblique12pt7b'],
   ['FreeMonoBoldOblique18pt7b','FreeMonoBoldOblique18pt7b'],
   ['FreeMonoBoldOblique24pt7b','FreeMonoBoldOblique24pt7b'],
   ['FreeMonoBoldOblique9pt7b','FreeMonoBoldOblique9pt7b'],
   ['FreeMonoOblique12pt7b','FreeMonoOblique12pt7b'],
   ['FreeMonoOblique18pt7b','FreeMonoOblique18pt7b'],
   ['FreeMonoOblique24pt7b','FreeMonoOblique24pt7b'],
   ['FreeMonoOblique9pt7b','FreeMonoOblique9pt7b'],
   ['FreeSans12pt7b','FreeSans12pt7b'],
   ['FreeSans18pt7b','FreeSans18pt7b'],
   ['FreeSans24pt7b','FreeSans24pt7b'],
   ['FreeSans9pt7b','FreeSans9pt7b'],
   ['FreeSansBold12pt7b','FreeSansBold12pt7b'],
   ['FreeSansBold18pt7b','FreeSansBold18pt7b'],
   ['FreeSansBold24pt7b','FreeSansBold24pt7b'],
   ['FreeSansBold9pt7b','FreeSansBold9pt7b'],
   ['FreeSansBoldOblique12pt7b','FreeSansBoldOblique12pt7b'],
   ['FreeSansBoldOblique18pt7b','FreeSansBoldOblique18pt7b'],
   ['FreeSansBoldOblique24pt7b','FreeSansBoldOblique24pt7b'],
   ['FreeSansBoldOblique9pt7b','FreeSansBoldOblique9pt7b'],
   ['FreeSansOblique12pt7b','FreeSansOblique12pt7b'],
   ['FreeSansOblique18pt7b','FreeSansOblique18pt7b'],
   ['FreeSansOblique24pt7b','FreeSansOblique24pt7b'],
   ['FreeSansOblique9pt7b','FreeSansOblique9pt7b'],
   ['FreeSerif12pt7b','FreeSerif12pt7b'],
   ['FreeSerif18pt7b','FreeSerif18pt7b'],
   ['FreeSerif24pt7b','FreeSerif24pt7b'],
   ['FreeSerif9pt7b','FreeSerif9pt7b'],
   ['FreeSerifBold12pt7b','FreeSerifBold12pt7b'],
   ['FreeSerifBold18pt7b','FreeSerifBold18pt7b'],
   ['FreeSerifBold24pt7b','FreeSerifBold24pt7b'],
   ['FreeSerifBold9pt7b','FreeSerifBold9pt7b'],
   ['FreeSerifBoldItalic12pt7b','FreeSerifBoldItalic12pt7b'],
   ['FreeSerifBoldItalic18pt7b','FreeSerifBoldItalic18pt7b'],
   ['FreeSerifBoldItalic24pt7b','FreeSerifBoldItalic24pt7b'],
   ['FreeSerifBoldItalic9pt7b','FreeSerifBoldItalic9pt7b'],
   ['FreeSerifItalic12pt7b','FreeSerifItalic12pt7b'],
   ['FreeSerifItalic18pt7b','FreeSerifItalic18pt7b'],
   ['FreeSerifItalic24pt7b','FreeSerifItalic24pt7b'],
   ['FreeSerifItalic9pt7b','FreeSerifItalic9pt7b']
	];
	
	
    Blockly.Blocks.oled_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_INIT,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ADDR',
                        options: [
                            ['0x78 (0x3c)', '0x3C'],
                            ['0x7a (0x3d)', '0x3D']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.oled_setFonts = {
		init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_SETFONTS,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
					{
                        type: 'field_dropdown',
                        name: 'fonts',
						options: fonts_Dropdown
					}],
					colour: colour,
					secondaryColour: secondaryColour,
					extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawLine = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWLINE,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWRECT,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLRECT,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawCircle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWCIRCLE,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillCircle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLCIRCLE,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawRoundRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWROUNDRECT,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillRoundRect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLROUNDRECT,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_drawTriangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_DRAWTRIANGLE,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'input_value',
                        name: 'X2'
                    },
                    {
                        type: 'input_value',
                        name: 'Y2'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_fillTriangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_FILLTRIANGLE,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'input_value',
                        name: 'X2'
                    },
                    {
                        type: 'input_value',
                        name: 'Y2'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_INVERSE, 'INVERSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_setText = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_SETTEXT,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SIZE',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE'],
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BGCOLOR',
                        options: [
                            [Blockly.Msg.OLED_COLOR_BLACK, 'BLACK'],
                            [Blockly.Msg.OLED_COLOR_WHITE, 'WHITE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_setCursor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_SETCURSOR,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_PRINT,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.OLED_EOL_WARP, 'warp'],
                            [Blockly.Msg.OLED_EOL_NOWARP, 'noWarp']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_CLEAR,
				args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_refresh = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_REFRESH,
				args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_startScroll = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_STARTSCROLL,
                args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.OLED_SCROLL_RIGHT, '0'],
                            [Blockly.Msg.OLED_SCROLL_LEFT, '1'],
                            [Blockly.Msg.OLED_SCROLL_DIAGRIGHT, '2'],
                            [Blockly.Msg.OLED_SCROLL_DIAGLEFT, '3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y0',
                        options: [
                            ['0', '0x00'],
                            ['8', '0x01'],
                            ['16', '0x02'],
                            ['24', '0x03'],
                            ['32', '0x04'],
                            ['10', '0x05'],
                            ['48', '0x06'],
                            ['56', '0x07']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y1',
                        options: [
                            ['8', '0x00'],
                            ['16', '0x01'],
                            ['24', '0x02'],
                            ['32', '0x03'],
                            ['40', '0x04'],
                            ['48', '0x05'],
                            ['56', '0x06'],
                            ['64', '0x07']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.oled_stopScroll = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_STOPSCROLL,
				args0: [
					{
                        type: 'field_dropdown',
                        name: 'disp',
                        options: [
                            ['display1','display1'],
                            ['display2','display2']
                        ]
                    }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.oled_string = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_STRING,
                args0: [{
                    type: 'input_value',
                    name: 'oledstr'
                }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

	Blockly.Blocks.oled_stringeql = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OLED_STRINGEQL,
                args0: [{
                    type: 'input_value',
                    name: 'oledstr'
                },
				{
                    type: 'input_value',
                    name: 'oledstreq'
                }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
