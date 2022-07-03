const QDPRobotC02 = formatMessage => ({
    name: 'QDP RobotC02',
    deviceId: 'QDPRobotC02_esp32',
    manufactor: 'QDP Robot',
    learnMore: 'https://qdprobot.taobao.com',
    typeList: ['arduino', 'microPython'],
    iconURL: 'asset/QDPRobotC02.png',
    description: formatMessage({
        id: 'QDPRobotC02.description',
        default: 'QDP robot C02.'
    }),
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    connectionIconURL: 'asset/QDPRobotC02-illustration.svg',
    connectionSmallIconURL: 'asset/QDPRobotC02-small.svg',
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobotC02'],
    helpLink: 'http://www.qdprobot.com/'
});

const QDPRobotC02Arduino = formatMessage => {
    const device = QDPRobotC02(formatMessage);
    device.defaultBaudRate = '9600';
    device.deviceId = 'QDPRobotC02_arduinoEsp32';
    device.programMode = ['upload'];
    deviceExtensionsCompatible = 'arduinoEsp32',
    device.hide = true;
    return device;
}

const QDPRobotC02MicroPython = formatMessage => {
    const device = QDPRobotC02(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'QDPRobotC02_microPythonEsp32';
    device.programMode = ['upload'];
    deviceExtensionsCompatible = 'microPythonEsp32',
    device.hide = true;
    return device;
}

module.exports = formatMessage => ([
    QDPRobotC02(formatMessage),
    QDPRobotC02Arduino(formatMessage),
    QDPRobotC02MicroPython(formatMessage)
]);
