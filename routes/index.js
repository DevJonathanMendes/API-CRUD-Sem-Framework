const routes = (req, res) => {
    req.url == "/" ?
        res.writeHead(200).end("Ok.") :
        res.writeHead(501).end("Not Implemented.");
};

module.exports = routes;