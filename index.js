const http = require("http");
const { SetHttp } = require("./utils/index");
const routes = require("./routes/index");

const server = http.createServer((req, res) => {
    SetHttp(req, res);
    routes(req, res);
});

server.listen(process.env.PORT || 3000);