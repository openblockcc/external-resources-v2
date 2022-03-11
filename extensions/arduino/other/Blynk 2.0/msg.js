/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BLYNK_CATEGORY: 'BLYNK 2.0',
        BLYNK_BEGIN: 'Initialize BLYNK Server with %1 baudrate',
		BLYNK_TEMPLATEID: 'Blynk Template ID %1 Device Name %2',
        BLYNK_USERID: 'Connect SSID %1 Password %2 Auth Token %3 for Blynk',
		BLYNK_START: 'Start Blynk Server',
        BLYNK_RECEIVE: 'Receive %1 data in virtual pin %2 from Blynk',
        BLYNK_SEND: 'Send %1 data in virtual pin %2 in every %3 ms to Blynk',
		BLYNK_STRING: 'String Variable %1',
		BLYNK_STRINGEQL: 'Assign %1 = %2'
    });
    return Blockly;
}

exports = addMsg;
