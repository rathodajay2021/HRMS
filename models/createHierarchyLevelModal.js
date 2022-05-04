const mongoose = require('mongoose')

const Schema = mongoose.Schema

const createHierarchyLevelSchema = new Schema({
    enthtypeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'createhierarchy',
        required: true
    },
    enthlevel: {
        type: Number,
        required: true
    },
    enthlevelname: {
        type: String,
        required: true
    }
},{timestamps: true})

const createHierarchyLevelModal = mongoose.model('createHierarchyLevel', createHierarchyLevelSchema)
module.exports = createHierarchyLevelModal