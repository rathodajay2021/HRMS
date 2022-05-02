const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const Schema = mongoose.Schema
const connection = mongoose.createConnection(`mongodb+srv://MERN:reset123@nodetuts.bql7y.mongodb.net/entityDB?retryWrites=true&w=majority`);
autoIncrement.initialize(connection)

const entityDefination = Schema({
    detaildefnid: {
        type: Number
    },
    detailtypel1: {
        type: Number
    },
    detailtypedesc1: {
        type: String
    },
    detailtypel2: {
        type: Number
    },
    detailtypedesc2: {
        type: String
    },
    status: {
        type: Number,
        default: 1
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

entityDefination.plugin(autoIncrement.plugin, {
    model : 'entitydef',
    field: 'detaildefnid',
    startAt: 1,
    incrementBy: 1
})

const EntityDef = mongoose.model('entitydef',entityDefination)
module.exports = EntityDef