const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema

const connection = mongoose.createConnection(`mongodb+srv://MERN:reset123@nodetuts.bql7y.mongodb.net/entityDB?retryWrites=true&w=majority`);
autoIncrement.initialize(connection);

const EntityTypeSchema = Schema({
    enttypeid: {
        type: Number
    },
    enttypedesc: {
        type: String,
        required: true
    },
    enttypesubset:{
        type: Number,
        default: 0
    },
    child:{
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1,
    },
    strtdate:{
        type: Date,
        default: Date.now
    },
    enddate:{
        type: Date,
        default: null
    }
})

EntityTypeSchema.plugin(autoIncrement.plugin, {
    model: "entitytype", // collection or table name in which you want to apply auto increment
    field: "enttypeid", // field of model which you want to auto increment
    startAt: 1, // start your auto increment value from 1
    incrementBy: 1, // incremented by 1
});

const EntityType = mongoose.model('entitytype',EntityTypeSchema)
module.exports = EntityType