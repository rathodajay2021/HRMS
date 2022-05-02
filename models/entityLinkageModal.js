const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EntityLinkageShema = new Schema({
    detaildefnid: {
        type: Number,
        required: true
    },
    enttypeid: {
        type: Number,
        required: true
    },
    typestatus: {
        type: Number,
        default: 1
    }
},{timestamps: true})

const entityLinkage = mongoose.model('entitylinkage',EntityLinkageShema)
module.exports = entityLinkage