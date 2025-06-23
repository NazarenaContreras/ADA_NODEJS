const {getBookById} = require("../models/bookModel");
const {formatBookResponse} = require("../views/bookView");

//funcion para manejar la solicitud del cliente
const handleBookRequest = (bookId) => {
    const book = getBookById(bookId);
    return formatBookResponse(book);
};

module.exports = {handleBookRequest};