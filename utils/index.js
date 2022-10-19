const successHeader = {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf8"
};

const errorHeader = {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Content-Type": "text/plain; charset=utf8"
};

const validateId = (fileBooks, dataBook) => {
    const { id } = dataBook;
    const bookIds = fileBooks.map(book => book.id);
    return bookIds.includes(Number(id));
};

const throwError = message => { throw new Error(message); };

const regId = /^[0-9]{1,4}$/; // Números positivos. Dígitos: Min 1 | Max 4. 
const regString = /^[\d\D]{2,64}$/im; // String, aceita acentos. Dígitos: Min 2 | Max 64.
const regPages = /^\d{1,4}$/; // Números positivos. Dígitos: Min 1 | Max 4.
const regPublished = /^\d{4,4}$/; // Números positivos. Dígitos: Min 4 | Max 4.


const utils = {
    SetHttp: function (req, res) {
        this.req = req;
        this.res = res;
    },

    validateValues: (fileBooks, dataBook) => {
        Object.keys(dataBook).forEach(item => {
            switch (item) {
                case "id":
                    if (typeof dataBook[item] != "number" || !regId.test(dataBook[item]) || validateId(fileBooks, dataBook)) {
                        throwError("Invalid Book ID.");
                    }; break;
                case "title":
                    if (typeof dataBook[item] != "string" || !regString.test(dataBook[item])) {
                        throwError("Invalid Title.");
                    }; break;
                case "pages":
                    if (typeof dataBook[item] != "number" || !regPages.test(dataBook[item])) {
                        throwError("Invalid Pages.");
                    }; break;
                case "published":
                    if (typeof dataBook[item] != "number" || !regPublished.test(dataBook[item])) {
                        throwError("Invalid Published.");
                    }; break;
                case "author":
                    if (typeof dataBook[item] != "string" || !regString.test(dataBook[item])) {
                        throwError("Invalid Author.");
                    }; break;
                default: throwError("Invalid JSON.");
            };
        });
        return true;
    },

    response: (code, data) => {
        const send = (code, header, message) =>
            res.writeHead(code, header).end(message);

        switch (code) {
            case 200: send(code, successHeader, data || "Ok."); break;
            case 201: send(code, successHeader, "Created."); break;
            case 204: send(code, errorHeader, "No Content."); break;
            case 400: send(code, errorHeader, data || "Bad Request."); break;
            case 404: send(code, errorHeader, "Not Found."); break;
            case 501: send(code, errorHeader, "Not Implemented."); break;
            default: send(500, errorHeader, "Internal Server Error."); break;
        };
    }
};

module.exports = utils;