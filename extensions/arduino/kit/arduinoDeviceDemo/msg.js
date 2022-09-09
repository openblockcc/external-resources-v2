/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ARDUINODEVICEDEMO_CATEGORY: 'Modules',
        DEVICEDEMO_BUTTON: 'Read button Port %1',
        DEVICEDEMO_ULTRASONIC: 'Read ultrasonic sensor Port TRIG %1 ECHO %2 unit %3',
        DEVICEDEMO_RGB: 'Set RGB LED Port %1 total %2  NO %3 R %4 G %5 B %6'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ARDUINODEVICEDEMO_CATEGORY: '模块',
        DEVICEDEMO_BUTTON: '读取按钮 端口 %1',
        DEVICEDEMO_ULTRASONIC: '读取超声波测距 端口 TRIG %1 ECHO %2 单位 %3',
        DEVICEDEMO_RGB: '设置 RGB LED 端口 %1 总数 %2  灯号 %3 R %4 G %5 B %6'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        ARDUINODEVICEDEMO_CATEGORY: '模組',
        DEVICEDEMO_BUTTON: '讀取按鈕 端口 %1',
        DEVICEDEMO_ULTRASONIC: '讀取超聲波測距 端口 TRIG %1 ECHO %2 單位 %3',
        DEVICEDEMO_RGB: '設定 RGB LED 端口 %1 總數 %2 燈號 %3 R %4 G %5 B %6'
    });
    return Blockly;
}

exports = addMsg;
