/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LOCALSERVER_CATEGORY: 'LocalServer',
        LOCALSERVER_BEGIN: 'Connect SSID %1 Password %2 for LocalServer',
        LOCALSERVER_APBEGIN: 'Set SSID %1 Password %2 for Access Point',
        LOCALSERVER_GETREQUEST: 'Read Request from Client',
        LOCALSERVER_CHKREQUEST: 'Check Request == %1',
        LOCALSERVER_CLIENTFLUSH:'Client Data Flush',
        LOCALSERVER_HTMLINIT: 'Create HTML Header',
        LOCALSERVER_CLIENTEMPTY:'Client print %1',
        LOCALSERVER_GUIBUTTON:'Create GUI Button for %1 , Set text %2 with %3',
        LOCALSERVER_HTMLEND: 'End HTML Header'
    });
    return Blockly;
}

exports = addMsg;
