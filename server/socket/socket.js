/**
 *  @author         CREDAOB Team
 */
const
    app     = require('express')(), 
    http    = require("http").createServer(app), 
    config  = require("../config.json").socket, 
    socket  = require("socket.io");


/**
 *  @description    Declare constants section
 */
const 
    PORT    = config.port || 4444, 
    io      = socket(http);



/**
 *  @description    Web Socket events
 */
io.on('connection', (client) => {
    console.log('Client connected...');

    client.on("test", (data) => {
        console.log({data});
        client.to("CREDAOB").emit("testBack", {payload: "Some data..."});
    });
});


/**
 *  @description    Launch the socket
 */
io.listen(PORT, () => {
    console.log(`
    ------------------------------------------------------
    
        The socket is listening on ${ PORT }\n
    ------------------------------------------------------`);
});