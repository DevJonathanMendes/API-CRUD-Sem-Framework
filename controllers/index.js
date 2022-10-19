const { readFile, writeFile } = require("fs");
const { response } = require("../utils/index");

const pathFile = __dirname + "/../data/books.json";
const encoding = "utf8";
const regUrlId = /\d{1,4}$/;

const stringify = books => JSON.stringify(books, null, 4);

const controllers = {
    getAllBooks: () => {
        readFile(pathFile, encoding, (error, fileBuffer) => {
            error ? response(500) : response(200, fileBuffer);
        });
    },

    findBookById: () => {
        readFile(pathFile, encoding, (error, fileBuffer) => {
            if (error) {
                response(500);
            } else {
                const fileBooks = JSON.parse(fileBuffer);
                const id = req.url.match(regUrlId)[0];
                const book = fileBooks.filter(book => book.id == id)[0];
                book ? response(200, stringify(book)) : response(204);
            };
        });
    },

    deleteBook: () => {
        readFile(pathFile, encoding, (error, fileBuffer) => {
            if (error) {
                response(500);
            } else {
                const fileBooks = JSON.parse(fileBuffer);

                const id = req.url.match(regUrlId)[0];
                const bookIds = fileBooks.map(book => book.id);

                if (bookIds.includes(Number(id))) {
                    const books = fileBooks.filter(books => books.id != id);

                    writeFile(pathFile, stringify(books), error => {
                        error ? response(500) : response(200);
                    });
                } else {
                    response(204);
                };
            };
        });
    }
};

module.exports = controllers;