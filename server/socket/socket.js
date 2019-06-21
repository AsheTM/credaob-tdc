/**
 *  @author         CREDAOB Team
 */
const
    socket  = require("socket.io");


/**
 *  @description    Declare constants section
 */
const 
    PORT    = 4444, 
    io      = socket(PORT);



/**
 *  @description    Web Socket events
 */
io.on('connection', (client) => {
    // Events
});
io.listen(4444);