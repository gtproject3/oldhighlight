const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    author_key: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    user_key: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;
