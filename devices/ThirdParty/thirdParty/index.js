const thirdParty = formatMessage => ({
    name: formatMessage({
        id: 'thirdParty.name',
        default: 'Third Party'
    }),
    deviceId: 'thirdParty_esp32',
    manufactor: 'OpenBlock',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino', 'microPython'],
    iconURL: 'asset/thirdParty.png',
    description: formatMessage({
        id: 'thirdParty.description',
        default: 'Demo of add third-party devices.'
    }),
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    connectionIconURL: 'asset/thirdParty-illustration.svg',
    connectionSmallIconURL: 'asset/thirdParty-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['kit'],
    helpLink: ''
});

const thirdPartyArduino = formatMessage => {
    const device = thirdParty(formatMessage);
    device.defaultBaudRate = '9600';
    device.deviceId = 'thirdParty_arduinoEsp32';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['arduinoThirdParty'],
    device.deviceExtensionsCompatible = 'arduinoEsp32',
    device.hide = true;
    return device;
}

const thirdPartyMicroPython = formatMessage => {
    const device = thirdParty(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'thirdParty_microPythonEsp32';
    device.programMode = ['upload'];
    device.deviceExtensions = ['microPythonThirdParty'],
    device.deviceExtensionsCompatible = 'microPythonEsp32',
    device.hide = true;
    return device;
}

module.exports = formatMessage => ([
    thirdParty(formatMessage),
    thirdPartyArduino(formatMessage),
    thirdPartyMicroPython(formatMessage)
]);
