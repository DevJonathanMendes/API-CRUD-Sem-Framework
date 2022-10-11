const http = require("http");
const routes = require("./routes/index");

const server = http.createServer(routes);
server.listen(process.env.PORT || 3000);