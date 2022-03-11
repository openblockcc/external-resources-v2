/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ADAFRUITIO_CATEGORY: 'Adafruit IO',
        ADAFRUITIO_BEGIN: 'Connect SSID %1 Password %2 for AdafruitIO',
        ADAFRUITIO_USERID: 'Set Username %1 AIO Key %2 for AdafruitIO',
		ADAFRUITIO_RUN: 'Run AdafruitIO',
        ADAFRUITIO_RECEIVE: 'Receive %1 data as %2 in feed %3 from AdafruitIO Feed Name %4',
        ADAFRUITIO_SEND: 'Send %1 data as %2 in feed %3 from AdafruitIO Feed Name %4',
		ADAFRUITIO_STRING: 'String Variable %1',
		ADAFRUITIO_STRINGEQL: 'Assign %1 = %2'
    });
    return Blockly;
}

exports = addMsg;
