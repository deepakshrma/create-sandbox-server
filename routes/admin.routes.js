"use strict";
const express = require('express')
const router = express.Router()

const init = (jsonRouter, middlewares) => {
    // middleware that is specific to this router
    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
    router.get('/all', function (req, res) {
        res.send(jsonRouter.db.getState());
    })
    // define the home page route
    router.get('/restart', middlewares[0])
    return router;
}
exports.init = init;