const { readFile, writeFile } = require("fs");

const pathFile = __dirname + "/../data/books.json";
const encoding = "utf8";

const controllers = {
    getAllBooks: () => {
        readFile(pathFile, encoding, (error, fileBuffer) => {

        });
    },
};

module.exports = controllers;