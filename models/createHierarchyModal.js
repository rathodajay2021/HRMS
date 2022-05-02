const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const Schema = mongoose.Schema
const connection = mongoose.createConnection(`mongodb+srv://MERN:reset123@nodetuts.bql7y.mongodb.net/entityDB?retryWrites=true&w=majority`)
autoIncrement.initialize(connection)

createHierarchySchema = new Schema({
    enthtypeid: {
        type: Number,
        unique: true
    },
    enthname: {
        type: String,
        required: true
    },
    maxnumlevel: {
        type: Number,
        required: true
    },
    delimiters: {
        type: String,
        required: true
    }
},{timestamps: true})

createHierarchySchema.plugin(autoIncrement.plugin, {
    model: 'createhierarchy',
    field: 'enthtypeid',
    startAt: 3000,
    incrementBy: 1
})

const createHierarchyModal = mongoose.model('createhierarchy', createHierarchySchema)
module.exports = createHierarchyModal