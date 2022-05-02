const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const Schema = mongoose.Schema
const connection = mongoose.createConnection(`mongodb+srv://MERN:reset123@nodetuts.bql7y.mongodb.net/entityDB?retryWrites=true&w=majority`)
autoIncrement.initialize(connection)

const createRelationSchema = new Schema({
    validrelid: {
        type: Number,
        unique: true
    },
    entitytype1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'entitytype',
        required: true
    },
    entitytype2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'entitytype',
        required: true
    },
    entrelid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'createrelation',
        required: true
    },
    entrelname: {
        type: String,
        required: true
    },
    hierarchy: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
},{timestamps: true})

createRelationSchema.plugin(autoIncrement.plugin, {
    model: 'validrelation',
    field: 'validrelid',
    startAt: 2000,
    incrementBy: 1
})

const createRelationModal = mongoose.model('validrelation', createRelationSchema)
module.exports = createRelationModal