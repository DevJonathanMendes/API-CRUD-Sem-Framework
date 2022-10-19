const { readFile, writeFile } = require("fs");
const { validateValues, response } = require("../utils/index");

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

    createNewBook: () => {
        req.on("data", dataBuffer => {
            readFile(pathFile, encoding, (error, fileBuffer) => {
                if (error) {
                    response(500);
                } else {
                    try {
                        const fileBooks = JSON.parse(fileBuffer);
                        const dataBook = JSON.parse(dataBuffer);

                        validateValues(fileBooks, dataBook);
                        fileBooks.unshift(dataBook);

                        writeFile(pathFile, stringify(fileBooks), error => {
                            error ? response(500) : response(201);
                        });
                    } catch (error) {
                        response(400, error.message);
                    };
                };
            });
        });
    },

    updateBook: () => {
        req.on("data", dataBuffer => {
            readFile(pathFile, encoding, (error, fileBuffer) => {
                if (error) {
                    response(500);
                } else {
                    try {
                        const fileBooks = JSON.parse(fileBuffer);

                        const id = req.url.match(regUrlId)[0];
                        const bookIds = fileBooks.map(book => book.id);

                        if (bookIds.includes(Number(id))) {
                            const dataBook = JSON.parse(dataBuffer);
                            validateValues(fileBooks, dataBook);

                            const book = fileBooks.filter(book => book.id == id)[0];
                            const books = fileBooks.filter(book => book.id != id);

                            const updateBook = Object.assign(book, dataBook);
                            books.unshift(updateBook);

                            writeFile(pathFile, stringify(books), error => {
                                error ? response(500) : response(200);
                            });
                        } else {
                            response(404);
                        };
                    } catch (error) {
                        response(400, error.message);
                    };
                };
            });
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