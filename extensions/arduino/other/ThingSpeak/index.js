const ThingSpeak = formatMessage => ({
    name: formatMessage({
        id: 'ThingSpeak.name',
        default: 'ThingSpeak',
        description: 'Name of ThingSpeak'
    }),
    extensionId: 'ThingSpeak',
    version: '1.0.0',
    supportDevice: ['arduinoEsp8266','arduinoEsp32'],
    author: 'iRobochakra',
    iconURL: `asset/ThingSpeak.png`,
    description: formatMessage({
        id: 'ThingSpeak.description',
        default: 'Data collection in the cloud with advanced data analysis using MATLAB',
        description: 'Description of ThingSpeak'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
	library: 'lib',
    tags: ['other'],
    helpLink: 'https://thingspeak.com/'
});

module.exports = ThingSpeak;
