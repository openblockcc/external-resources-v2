/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        THINGSPEAK_CATEGORY: 'Thing Speak',
        THINGSPEAK_BEGIN: 'Connect SSID %1 Password %2 for ThingSpeak',
        THINGSPEAK_USERID: 'Set Channel ID %1 API Key AIO Key %2 for ThingSpeak',
        THINGSPEAK_SEND: 'Send %1 data to Field %2 in ThingSpeak',
		THINGSPEAK_PUSH: 'Send to Multi Field %1  %2',
		THINGSPEAK_MULTI: 'Set %1 data for Multi Field %2 in ThingSpeak',
		THINGSPEAK_STATUS: 'Send Status %1 to ThingSpeak'
    });
    return Blockly;
}

exports = addMsg;
