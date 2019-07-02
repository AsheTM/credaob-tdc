/**
 *  @author         CREDAOB Team
 */
module.exports  = (app) => {
    /**
     *  @description    Require section
     */ 
    const
        socket  = require("../config.json").socket, 
        socketIo  = require("socket.io");


    /**
    *  @description    Declare constants section
    */
    const 
        PORT    = socket.port || 3001, 
        io      = app.listen(PORT) && socketIo(app);


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
}
