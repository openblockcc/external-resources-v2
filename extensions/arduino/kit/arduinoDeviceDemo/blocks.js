/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const button_color = '#27b6ac';
    const ultrasonic_color = '#00a6ac';
    const rgb_color = '#129f65';

    const Button_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAHJklEQVR4nO2db4gWRRzHP55/zqvzLPTM7D+S2hH90zKlU1PLLCOQSsPoVRARvQoiIUx6EfRCKiozMcSsXpQSQRjSC/VM0qg8/56kXGaZJRbkn/QuvevFPIe7M7P77D67s7sztx+YF/M8v2fmN/Pd3ZnZZ/4MIH/GAvcDrcAE4FqgqfLdSeAI0AF8A2wEOnPw0XkGAgsRldwD9EYMPZXfLADqMvfaUWYjrvioIgSFfcDMjH13igbgfZILIYflwNAMy+EEzcB3BFfqD8ASYAaiHbm0EiZUPltSsQn6/XZgZGalsZxmYD/69uAzYHyMtMYD69C3O/soRalKA/o7oxO4O0G6U4GfNelup3x8haJrM7aQzpXcXElLTv/dFNJ2kvvQizEkxTyGoBel7H1JDETt2nZi5hnfXElbbk/KcYqHhagNeJI2oxpTURv6xw3mZx3b8FfOpxnkuV7Ksy2DPK1gLP6rtYdoXduJwArEo+5MJXQgBn63Rfj9Tah35fUxfXeSZ1EHfWEMBz5CbZjlyl0NDKuS1k7pd8/UVALH+Bh/pSwJsb0M+JFwMbxhB9AYkt5SyX5tgnI4g1zBM0Js5ed+lBBWyTMl2+8TlMMZTuCvlHEBdtNRK3s/8CgwqhIeAw5INj3AXQFpjpdsjycujQN04a+UoOf+asluM1CvsbsE8ajy2r4dkOYwye5cTSVwjHP4KyXo3dJPkt3kkDRnSbZ7A+waKAVROI6/Uq4MsPtXstPdHX00Srb/BNhdJdn9GdP33DHxeuE3KR7UhjRI8a6QNE9L8SatlZrXkZA0C4kJQfZL8aAG2AR3SvGODPNOBROCbJPijxjIIwg5r60Z5l1YbkDtpt6osZO7vNWoZj8O9ZXNdTF9d5Y2/JX3ocYmbUHWSt9viu21w8iv389rbNIW5Lz0/YLYXjtMHdBOeAWmLYj3uz2Uf1ApzML/TJcxJUgPcG8N/vYLlpO9IO/U5Gk/YTAXJyHImBBkG+Ej/hLEJITdms/TFqSdcqJcZHQVlbYgTogxIMe85Uqt5ktceyspu4YFoxSkYJSCFAybBRkJvILowZ0BziJety9DrFMsiUnSXtZpzWd9oRt4KX2X3SapIFHCcs/vJwLvIe6i05VwCDHZYk7i0jhAFoL0As8Ba6i+2vdrHBnL1EoaguwBHkJMgmgE5iFmpNQq3m7EbMp+SVJBOtFPdhiOfrlb1PBmrQWynaSCPBFiu0hj34toL25BzHgZCtwKbJBsziLukgnAW4hJG329uIPAKsyudcmNpIJcEWI7WmP/RYDtENTpqluA/zRpeMMHpLs8L3eSChLXvjXE9gWNfZSwCYdEyVqQy0Nsp2jso4ZXI/hiBVkLEkazxr4X0b5M4uLOEpNQ25wuHOkuF0mQeo39IfSPo/rKd17b5yP4Ewmb32WliW5e8QrEKxid7Urps+mpe5QDRbpDdPZhc5InS7YHIqQfCZfvEO8s/KM1/P7XGN85Mbo3fcXPQYzmDwMP1JB+2CY28sKgsxHSLzxxK/iox9bEuo9fPOn/EcE+rv+FJ26BHkRc8Z3AXAP+zEMIcQR4OIK9EUFsmnVSNIz473KjbiWlIAWjFKRg5CXIoJzyLTxZC9IEvIa6dLokB1pQd2/oCzYKZPU4ZBxwDL0YxxATFWzDWkFGIwZbcgE6EDv/DM7PtURYK8iXqM6vxP4Nj60UZC6q465Ms7FSkK34nW7DvlckQVgniLy723nEzqGuYEQQk+OQeVK8DQt358kak4JMkeLrDOZVEgH5zJAomyHbhHVtyN/4HXbif2cP1gnSjd9h114oWteoyzuCynsslmgwKchfUnyEwbycwaQgJ6R40HaxJR5MCnJQiodtlFxSwaQg30rxqQbzKonAJPy9kFOEHzVhG9Z1e+sQc2C9Ti/K1aN0sU4QgNfxO70jX3dSxUpBWlAX7Nv4d60OKwUBsfrV6/he3NgX0VpBbke9S5bm6lFymvCXx7pzSj7BX4Au4OZcPUqG9UcrjUEcwuItxHbEEa02YuzwsaxmLv4OLJY+mwy8mFH+aTNNilv5T+gA4Cv8V1Y3YgBpG7vwl+PpfN2pnatR/7jag129rhb8/l/A8i0FF6B2GZfl6lE8PsfvuxPnlKxBvcpm5+pRNFpRL6b5uXqUEk2om4ydQH80UlEYhVhi7fW5HYcWPd2DeirOQeCaPJ0KoB51FmYP4Vs+Wcli1EfAYYo1w3EUqhi9wBt5OmWSVaiFPQU8ladTFVrxbyjQF9pwaOMymUEEH3C/mXz2N2xB7U31hV2Eb4bmBHWIE6B1FdAL7AReRoyQx5DuuKURseHlTMRLz50hfrTRD8Tw8iTicRVUIXmFHkSb4exjKoyxBD8u8gjtONibqoVpwHrUKalZhAuI9ms+GY8zbFjNNBqx31UrcAeiGzqC9NqRbuAkojfVgWgnNpLT0d//A/fJjRVP/osfAAAAAElFTkSuQmCC';
    const UltraSonicDistanceSensor_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMxNzc0NDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0LjY3IDM3MC4xNnYyODMuNjhoODk0LjY2VjM3MC4xNnogbTgyOS4wOCAyMTguMTJoLTc2My41VjQzNS43MmgxMjguMTN2NTQuNDdIMzI0di01NC40N2g4MS42djk4LjA5aDY1LjU4di05OC4wOWg4MS42NHY1NC40N2g2NS41OHYtNTQuNDdINzAwdjk4LjA5aDY1LjU4di05OC4wOWgxMjguMTd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI2MzQ1Ij48L3BhdGg+PC9zdmc+';
    const RGB_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABeUlEQVRIidXUMUhVcRTH8U8PTBdxEDFoUbekhoSnFEQYKDQEwbMxkAiaotoanZzErSGCiIacxC3ESXAIbHDp5aQEhbjoomAqaMM9Dy7Xe/WWObwf/Plzz/93/t/D+V8Oza5LBfE21DCCm7iCDlSwi5/4hs+Yxe+/gY5iA8cl16/IKaXb2I/EZbzCELrQihZ0YhAvUA/vfvjO1EIkvFXcvrQqeBc582UAu2HuLmMuo0rm+yD244sCLMf+KMfbeNQ13I3Yfckjb+FJxreJp9lLHsbhBtpzAFVMYjFi3zGOYaymfPfwOoo5oaUwTeYAHuMT5iJ2iOvoRV/KN4OvmM4DVHGEPfRkAOtxdi0FuJEqquGbwAd8yQPAx1QlacAtSc8b/a7jGQYygAd4KXmbXF2V/LJH6E8lVqO6lYiN4Ad28D5i27HW8LwIAG/i0qnTTOfRnQCsnGX8V7VKelg05LZw+byQsVMAtTIXlBloRWOjTO6JUfHf1fyA5tcfDIFywhVTZQcAAAAASUVORK5CYII=';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.deviceDemo_button = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DEVICEDEMO_BUTTON,
                args0: [
                    {
                        type: 'field_image',
                        src: Button_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: button_color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.deviceDemo_ultrasonic = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DEVICEDEMO_ULTRASONIC,
                args0: [
                    {
                        type: 'field_image',
                        src: UltraSonicDistanceSensor_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TRIG',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ECHO',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'UNIT',
                        options: [['cm', 'Cm'], ['inch', 'inch']]
                    }
                ],
                colour: ultrasonic_color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.deviceDemo_rgb = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DEVICEDEMO_RGB,
                args0: [
                    {
                        type: 'field_image',
                        src: RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'ALL'
                    },
                    {
                        type: 'input_value',
                        name: 'POS'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                colour: rgb_color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
