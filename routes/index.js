const controllers = require("../controllers/index");

const regUrlWithId = /^\/books\/\d{1,4}$/;
const regUrl = /^\/(books\/?)?$/;

const routes = (req, res) => {
    const { url, method } = req;

    if (method == "GET" && regUrlWithId.test(url)) {
        controllers.findBookById();
    }
    else if (method == "GET" && regUrl.test(url)) {
        controllers.getAllBooks();
    }
    else if (method == "POST" && regUrl.test(url)) {
        controllers.createNewBook();
    }
    else if (method == "PATCH" && regUrlWithId.test(url)) {
        controllers.updateBook();
    }
    else if (method == "DELETE" && regUrlWithId.test(url)) {
        controllers.deleteBook();
    }
    else {
        res.writeHead(501).end("Not Implemented");
    };
};

module.exports = routes;