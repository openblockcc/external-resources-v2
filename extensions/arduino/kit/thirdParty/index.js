const ironKit = () => ({
    name: 'Third Party',
    extensionId: 'arduinoThirdParty',
    version: '1.0.0',
    supportDevice: ['thirdParty_arduinoEsp32'],
    author: 'OpenBlock',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: ''
});

module.exports = ironKit;
