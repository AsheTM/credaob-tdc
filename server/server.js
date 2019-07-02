/**
 *  @author         CREDAOB Team
 *  @description    Require section
 */
const
    Express     = require("express"),
    http        = require("http"), 
    bodyParser  = require("body-parser"), 
    socket      = require("./socket/socket"), 
    config      = require("./config.json"), 
    routes      = require("./router/routes");


/**
 *  @description    Declare constants section
 */
const 
    server      = config.server, 
    app         = Express(), 
    httpServer  = http.Server(app), 
    io          = socket(httpServer), 
    PORT        = process.env.PORT || server.port || 3000;


/**
 *  @description    Setting parameters of Express Framework
 */
app.set("trust proxy", server.settings["trust proxy"]);


/**
 *  @description    Middleware section
 */
app.use(bodyParser.json({}));
app.use(bodyParser({extended: true}));
app.use((req, res, next) => {
    console.log(`Req from ${ req.ip }`);
    next();
});

/**
 *  @description    Routers section
 */
app.use("/", routes);


/**
 *  @description    Starting the server on the port @PORT constant defined at the top
 */
app.listen(PORT, () => console.log(`
------------------------------------------------------

    The app is listening on ${ PORT }\n
------------------------------------------------------`));
