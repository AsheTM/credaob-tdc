/**
 *  @author         CREDAOB Team
 */
const
    config  = require("../config.json").socket, 
    socket  = require("socket.io");


/**
 *  @description    Declare constants section
 */
const 
    PORT    = config.port || 4444, 
    io      = socket(PORT);



/**
 *  @description    Web Socket events
 */
io.on('connection', (client) => {
    // Events
});
io.listen(PORT);