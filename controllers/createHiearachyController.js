const createHierarchyModal = require('../models/createHierarchyModal')

const getHierarchyData = (req,res) => {
    createHierarchyModal.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const postHierarchyData = (req,res) => {
    const HierarchyData = new createHierarchyModal(req.body)
    HierarchyData.save()
        .then(result => res.json({message: "Hierarchy created successfully", res: result}))
        .catch(err => console.log(err))
}

const putHierarchyData = (req,res) => {
    console.log(req.body)
    createHierarchyModal.findOneAndUpdate({enthtypeid : req.params.id}, req.body)
        .then(result => res.json({message: "Hierarchy updated successfully", res: result}))
        .catch(err => console.log(err))
}

const deleteHierarchyData = (req,res) => {
    createHierarchyModal.findOneAndRemove({enthtypeid : req.params.id})
        .then(result => res.json({message: "Hierarchy deleted successfully", res: result}))
        .catch(err => console.log(err))
}

module.exports = {
    getHierarchyData,
    postHierarchyData,
    putHierarchyData,
    deleteHierarchyData
}