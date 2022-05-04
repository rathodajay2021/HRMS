const createHierarchyModal = require('../models/createHierarchyModal')
const createHierarchyLevelModal = require('../models/createHierarchyLevelModal')

const getHierarchyData = (req, res) => {
    createHierarchyModal.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const postHierarchyData = (req, res) => {
    const HierarchyData = new createHierarchyModal(req.body)
    HierarchyData.save()
        .then(result => res.json({ message: "Hierarchy created successfully", res: result }))
        .catch(err => console.log(err))
}

const putHierarchyData = (req, res) => {
    console.log(req.body)
    createHierarchyModal.findOneAndUpdate({ enthtypeid: req.params.id }, req.body)
        .then(result => res.json({ message: "Hierarchy updated successfully", res: result }))
        .catch(err => console.log(err))
}

const deleteHierarchyData = (req, res) => {

    // createHierarchyLevelModal.find().populate({ path: 'enthtypeid', select: 'enthtypeid enthname' })      //this one is for hierarachy level
    //     .then(result => {
    //         if (result[0].enthtypeid) {
    //             console.log('delete method')
    //             for (let i = 0; i < result.length; i++) {
    //                 console.log(result[i].enthtypeid.enthtypeid)
    //                 console.log(req.params.id)
    //                 if (result[i].enthtypeid.enthtypeid == req.params.id) {
    //                     console.log('running')
    //                     result[i].active = 0
    //                     console.log(result[i])
    //                     createHierarchyLevelModal.findByIdAndUpdate(result[i]._id, result[i])
    //                         .then(result => console.log('result', result))
    //                         .catch(err => console.log(err))
    //                 }
    //             }
    //         }
    //         createHierarchyModal.findOneAndRemove({ enthtypeid: req.params.id })
    //             .then(result => res.json({ message: "Hierarchy deleted successfully", res: result }))
    //             .catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))
    createHierarchyModal.findOneAndRemove({ enthtypeid: req.params.id })
        .then(result => res.json({ message: "Hierarchy deleted successfully", res: result }))
        .catch(err => console.log(err))
}

module.exports = {
    getHierarchyData,
    postHierarchyData,
    putHierarchyData,
    deleteHierarchyData
}