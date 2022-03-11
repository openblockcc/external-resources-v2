const motorShieldv1 = formatMessage => ({
    name: formatMessage({
        id: 'motorShieldv1.name',
        default: 'Adafruit Motor Shield v1.0',
        description: 'Name of motor shield v1.0'
    }),
    extensionId: 'motorShieldv1',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560'],
    author: 'iRobochakra',
    iconURL: `asset/motorShieldv1.png`,
    description: formatMessage({
        id: 'motorShieldv1.description',
        default: 'Control servos, steppers and DC motors with an Arduino!',
        description: 'Description of motor shield v1.0'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
	library: 'lib',
    tags: ['shield'],
    helpLink: 'https://learn.adafruit.com/adafruit-motor-shield'
});

module.exports = motorShieldv1;
