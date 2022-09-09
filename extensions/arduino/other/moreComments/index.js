const moreComments = formatMessage => ({
    name: formatMessage({
        id: 'moreComments.name',
        default: 'More Comments'
    }),
    extensionId: 'moreComments',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/moreComments.png`,
    description: formatMessage({
        id: 'moreComments.description',
        default: 'Allows you to add comments in the form of blocks to increase program readability.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['other'],
    helpLink: 'https://wiki.openblock.cc'
});

module.exports = moreComments;
