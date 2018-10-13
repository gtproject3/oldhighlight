const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    authorName: { type: String, required: true },
    gender: { type: String, required: true },
    About: String,
    born_at: { type: Date, default: Date.now },
    died_at: { type: Date, default: Date.now },
    works_count: Int,
    race: String,
    sexual_orientation: String,
    disability: String

});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;


