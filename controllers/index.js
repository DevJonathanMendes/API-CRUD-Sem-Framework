const { readFile, writeFile } = require("fs");
const { response } = require("../utils/index");

const pathFile = __dirname + "/../data/books.json";
const encoding = "utf8";

const controllers = {
    getAllBooks: () => {
        readFile(pathFile, encoding, (error, fileBuffer) => {
            error ? response(500) : response(200, fileBuffer);
        });
    },
};

module.exports = controllers;