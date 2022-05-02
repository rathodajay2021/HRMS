const validRelationModal = require('../models/validRelationModal')
const createRelationModal = require('../models/createRelationModal')

const getValidRelationData = (req, res) => {
    validRelationModal.find().populate([
        { path: 'entitytype1', select: 'enttypedesc' },
        { path: 'entitytype2', select: 'enttypedesc' },
        { path: 'entrelid', select: 'relid relname' }
    ])
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const postValidRelationData = (req, res) => {
    createRelationModal.findById(req.body.entrelid)
        .then(result => {
            const validRelData = new validRelationModal(req.body)
            validRelData['entrelname'] = result.relname
            console.log('we get the data', validRelData)
            validRelData.save()
                .then(result => res.json({ message: 'Valid realtion is added successfully', res: result }))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

const putValidRelationData = (req, res) => {
    createRelationModal.findById(req.body.entrelid)
        .then(result => {
            req.body['entrelname'] = result.relname
            validRelationModal.findOneAndUpdate({ validrelid: req.params.id }, req.body)
                .then(result => res.json({ message: 'Valid relation is updated successfully', res: result }))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

const deleteValidRelationData = (req, res) => {
    validRelationModal.findOneAndRemove({ validrelid: req.params.id })
        .then(result => res.json({ message: 'Valid relation is deleted successfully', res: result }))
        .catch(err => console.log(err))
}

module.exports = {
    getValidRelationData,
    postValidRelationData,
    putValidRelationData,
    deleteValidRelationData
}