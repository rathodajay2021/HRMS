const EntityType = require('../models/entityTypeModal')
// const mongoose = require('mongoose')

const testController = (req, res) => {
    res.send('working fine')
}

const getEntityTypeData = (req,res) => {
    EntityType.find()
        .then((result) => {
            res.json(result)
        })
        .catch(err => console.log(err))
}

const postEntityTypeData = (req,res) => {
    const Entity = new EntityType(req.body)
    Entity.save()
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
}

const putEntityTypeData = (req,res) => {
    const id = req.params.id
    EntityType.findOneAndUpdate({enttypeid: id},{enttypedesc: req.body.enttypedesc})
        .then((result) => console.log('res',result))
        .catch((err) => console.log('err',err))
}

const deleteEntityTypeData = (req,res) => {
    const id = req.params.id
    console.log(id)
    EntityType.findOneAndRemove({enttypeid: id})
        .then((result) => console.log('res',result))
        .catch((err) => console.log('err',err))
}

module.exports = {
    testController,
    getEntityTypeData,
    postEntityTypeData,
    putEntityTypeData,
    deleteEntityTypeData
}