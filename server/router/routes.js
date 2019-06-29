/**
 *  @author         CREDAOB Team
 */
const 
    config  = require("../config.json").server.router.settings, 
    router  = require("express").Router({
        caseSensitive:  config.caseSensitive, 
        mergeParams:    config.mergeParams, 
        strict:         config.strict
    });

/**
 *  @description    The routes handlers
 */
router.get("/", (req, res, next) => {
    // 
});

router.get("/:room", (req, res, next) => {
    // 
});

router.post("/", (req, res, next) => {
    // 
});

router.put("/", (req, res, next) => {
    // 
});

router.delete("/", (req, res, next) => {
    // 
});

module.exports  = router;
