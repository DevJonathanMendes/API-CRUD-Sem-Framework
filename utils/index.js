const utils = {
    SetHttp: function (req, res) {
        this.req = req;
        this.res = res;
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