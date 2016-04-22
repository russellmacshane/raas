module.exports = function (app) {
    app.get('/raas/v1/', function (req, res) {
        res.send('Welcome to RaaS');
    });

    app.get('/raas/v1/bozo', function (req, res) {
        res.send("You're a big bozo");
    });    
};