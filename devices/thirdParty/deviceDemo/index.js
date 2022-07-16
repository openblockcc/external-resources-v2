const deviceDemo = formatMessage => ({
    name: formatMessage({
        id: 'deviceDemo.name',
        default: 'Third Party Device Demo'
    }),
    deviceId: 'deviceDemo_esp32',
    manufactor: 'OpenBlock',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino', 'microPython'],
    iconURL: 'asset/deviceDemo.png',
    description: formatMessage({
        id: 'deviceDemo.description',
        default: 'An example showing how to add a third-party board.'
    }),
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    connectionIconURL: 'asset/deviceDemo-illustration.svg',
    connectionSmallIconURL: 'asset/deviceDemo-small.svg',
    programMode: ['realtime', 'upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['kit'],
    helpLink: ''
});

const deviceDemoArduino = formatMessage => {
    const device = deviceDemo(formatMessage);
    device.defaultBaudRate = '9600';
    device.deviceId = 'deviceDemo_arduinoEsp32';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['arduinoDeviceDemo'],
    device.deviceExtensionsCompatible = 'arduinoEsp32',
    device.hide = true;
    return device;
};

const deviceDemoMicroPython = formatMessage => {
    const device = deviceDemo(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'deviceDemo_microPythonEsp32';
    device.programMode = ['upload'];
    device.deviceExtensions = [],
    device.deviceExtensionsCompatible = 'microPythonEsp32',
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    deviceDemo(formatMessage),
    deviceDemoArduino(formatMessage),
    deviceDemoMicroPython(formatMessage)
]);
