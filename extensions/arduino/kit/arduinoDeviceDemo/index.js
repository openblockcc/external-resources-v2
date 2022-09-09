const arduinoDeviceDemo = () => ({
    name: 'Third Party Device Demo',
    extensionId: 'arduinoDeviceDemo',
    version: '1.0.0',
    supportDevice: ['deviceDemo_arduinoEsp32'],
    author: 'OpenBlock',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: ''
});

module.exports = arduinoDeviceDemo;
