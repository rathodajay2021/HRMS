const createRelationModal = require('../models/createRelationModal')

const getRelationData = (req,res) => {
    createRelationModal.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const postRelationData = (req,res) => {
    const createRelation = new createRelationModal(req.body)
    createRelation.save()
        .then(result => res.json({message: 'Relationship created successfully', res: result}))
        .catch(err => console.log(err))
}

const putRelationData = (req,res) => {
    createRelationModal.findOneAndUpdate({relid: req.params.id}, req.body)
        .then(result => res.json({message:'Relationship updated successfully', res: result}))
        .catch(er => console.log(err))
}

const deleteRelationData = (req,res) => {
    createRelationModal.findOneAndRemove({relid: req.params.id})
        .then(result => res.json({message: 'Relationship deleted successfully', res: result}))
        .catch(err => console.log(err))
}

module.exports = {
    getRelationData,
    postRelationData,
    putRelationData,
    deleteRelationData
}