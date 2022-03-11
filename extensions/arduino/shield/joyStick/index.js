const joyStick = formatMessage => ({
    name: formatMessage({
        id: 'joyStick.name',
        default: 'Joystick Shield V1.A',
        description: 'Name of joyStick'
    }),
    extensionId: 'joyStick',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560'],
    author: 'iRobochakra',
    iconURL: `asset/joyStick.png`,
    description: formatMessage({
        id: 'joyStick.description',
        default: 'The Joystick Shield enable your Arduino with a joystick!',
        description: 'Description of Joystick'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
	library: 'lib',
    tags: ['shield'],
    helpLink: 'https://hardwarefun.com/projects/joystick-shield'
});

module.exports = joyStick;
