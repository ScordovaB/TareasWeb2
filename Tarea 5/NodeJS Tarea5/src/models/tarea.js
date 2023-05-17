const {Schema, model} = require('mongoose');

const today = new Date();
const tareaSchema = new Schema({
    titulo: {type: String},
    description: {type:String},
    status :{type: String, default:'new'},
    date:{type:Date, default:today}
});

module.exports = model('tareas',tareaSchema);