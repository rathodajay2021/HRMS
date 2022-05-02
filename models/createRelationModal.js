const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const Schema = mongoose.Schema
const connection = mongoose.createConnection(`mongodb+srv://MERN:reset123@nodetuts.bql7y.mongodb.net/entityDB?retryWrites=true&w=majority`)
autoIncrement.initialize(connection)

const createRelationSchema = new Schema({
    relid:{
        type: Number,
        unique: true
    },
    relname: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
},{timestamps : true})

createRelationSchema.plugin(autoIncrement.plugin, {
    model: 'createrelation',
    field: 'relid',
    startAt: 500,
    incrementBy: 1
})

const createRelationModal = mongoose.model('createrelation', createRelationSchema)
module.exports = createRelationModal