/**
 *  @author         CREDAOB Team
 *  @description    Require section
 */
const
    Express     = require("express"),
    socket      = require("./socket/socket"), 
    bodyParser  = require("body-parser");


/**
 *  @description    Declare constants section
 */
const 
    PORT    = process.env.PORT || 3000, 
    app     = Express();


/**
 *  @description    Setting parameters of Express Framework
 */
app.set("trust proxy", false);


/**
 *  @description    Middleware section
 */
app.use(bodyParser({extended: true}));
app.use((req, res, next) => {
    console.log(`Req from ${ req.ip }`);
    next();
});


/**
 *  @description    Starting the server on the port @PORT constant defined at the top
 */
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));