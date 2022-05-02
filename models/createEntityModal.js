const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const Schema = mongoose.Schema
const connection = mongoose.createConnection(`mongodb+srv://MERN:reset123@nodetuts.bql7y.mongodb.net/entityDB?retryWrites=true&w=majority`)
autoIncrement.initialize(connection)

const createEntitySchema = new Schema({
    entityid: {
        type: Number,
        unique: true
    },
    entitytypeid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'entitytype', 
        required: true
    },
    entityname: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
},{timestamps: true})

createEntitySchema.plugin(autoIncrement.plugin, {
    model: 'createEntity',
    field: "entityid",
    startAt : 123450000000000,
    incrementBy: 1,
})

const createEntityModal = mongoose.model('createEntity', createEntitySchema)
module.exports = createEntityModal