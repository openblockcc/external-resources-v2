const adafruitIO = formatMessage => ({
    name: formatMessage({
        id: 'adafruitIO.name',
        default: 'Adafruit IO',
        description: 'Name of Adafruit IO'
    }),
    extensionId: 'adafruitIO',
    version: '1.1.0',
    supportDevice: ['arduinoEsp8266','arduinoEsp32'],
    author: 'iRobochakra',
    iconURL: `asset/adafruitIO.png`,
    description: formatMessage({
        id: 'adafruitIO.description',
        default: 'Adafruit IO is the easiest way to get your projects onto the Internet of Things!',
        description: 'Description of Adafruit IO'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
  	library: 'lib',
    tags: ['other'],
    helpLink: 'https://io.adafruit.com/'
});

module.exports = adafruitIO;
