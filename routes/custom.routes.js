const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const init = () => {
    router.use(jsonParser);
    router.post('/users/login', function (req, res) {
        if (req.body.username == "username" || req.body.password == "password") {
            return res.send({
                status: 'SUCCESS',
                message: "User is successfully loggedin"
            });
        }
        return res.sendStatus(401, {
            error: "Unauthorized user"
        });
    })
    router.get('/users/:username', function (req, res) {
        if (req.params.username == "username") {
            return res.send({
                username: req.params.username
            });
        }
        return res.sendStatus(404, {
            error: "User not found"
        });
    })
    return router;
}
exports.init = init;