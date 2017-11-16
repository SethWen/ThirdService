const restify = require('restify');

let server = restify.createServer({
    name: 'third_service',
    version: '1.0.0',
});
server.use(restify.pre.userAgentConnection());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(function (req, res, next) {
    // req.log.info({ req: { method: req.method, url: req.url, httpVersion: req.httpVersion, headers: req.headers} }, 'start');
    console.log({ req: { method: req.method, url: req.url, httpVersion: req.httpVersion, headers: req.headers} }, 'start');
    next();
});

server.on('after', function (req, res, route) {
    // req.log.info({res: res}, "finished");
    console.log({res: res}, "finished")
});
server.listen('7878', function () {
    // log.info("server %s is listening on port <%s>", server.name, server.url);
    console.log("server %s is listening on port <%s>", server.name, server.url);
});

server.post('/test', function(req, res, next) {
    res.charSet('utf-8');
    res.send('hello test post: ' + JSON.stringify(req.body));
    next();
})