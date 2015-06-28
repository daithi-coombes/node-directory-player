var Player = require('player'),
    __dirname = '/media/daithi/DATA/Music/psyanide/'

var player = new Player([
    __dirname + '10 Lyrix - afrika soul.mp3',
    __dirname + '06 Module - snake skin radio.mp3',
    __dirname + '04 Smurf - mindless.mp3'
])

player.play()
