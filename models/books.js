const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author_key: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    book_title: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
