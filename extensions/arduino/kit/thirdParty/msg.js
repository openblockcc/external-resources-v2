/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DEMO_MODULE_CATEGORY: 'Modules',
        thirdParty_button:'Button Port %1',
        thirdParty_ultrasonic:'Ultrasonic sensor Port TRIG %1 ECHO %2 unit %3',
        thirdParty_rgb:'RGB LED Port %1 total %2  NO %3 R %4 G %5 B %6'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DEMO_MODULE_CATEGORY: '模块',
        thirdParty_button:'按钮 端口 %1',
        thirdParty_ultrasonic:'超声波测距 端口 TRIG %1 ECHO %2 单位 %3',
        thirdParty_rgb:'RGB LED 端口 %1 总数 %2  灯号 %3 R %4 G %5 B %6'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        DEMO_MODULE_CATEGORY: '模組',
        thirdParty_button:'按鈕 端口 %1',
        thirdParty_ultrasonic:'超聲波測距 端口 TRIG %1 ECHO %2 單位 %3',
        thirdParty_rgb:'RGB LED 端口 %1 總數 %2 燈號 %3 R %4 G %5 B %6'
    });
    return Blockly;
}

exports = addMsg;
