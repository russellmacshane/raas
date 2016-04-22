module.exports = function (app) {
    app.get('/raas/v1/', function (req, res) {
        res.send('Welcome to RaaS');
    });
};