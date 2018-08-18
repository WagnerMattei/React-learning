/**
 * DATABSE CONFI - mongo
 */

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true })

 mongoose.Error.messages.Number.min = '{PATH} debe ser mayor que {MIN}'
 mongoose.Error.messages.Number.max = '{PATH} debe ser menor que {MAX}'
 mongoose.Error.messages.String.enum = '{VALUE} no es válido para {PATH}'