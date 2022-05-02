const EntityType = require('../models/entityTypeModal')
// const mongoose = require('mongoose')

const testController = (req, res) => {
    res.send('working fine')
}

const getAllEntityTypeData = (req,res) => {
    EntityType.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const getEntityTypeData = (req,res) => {
    EntityType.find()
        .then((result) => {
            res.json(result.filter( data => {
                return data.enttypesubset == 0
            }))
        })
        .catch(err => console.log(err))
}

const getchildEntityTypeData = (req,res) => {
    const id = req.params.id
    EntityType.find()
        .then((result) => {
            res.json(result.filter( data => {
                return data.enttypesubset == id
            }))
        })
        .catch(err => console.log(err))
}

const postEntityTypeData = (req,res) => {
    const Entity = new EntityType(req.body)
    Entity.save()
        .then((result) => res.json({message: 'Entity added successfully'}))
        .catch((err) => res.json({error: err}))
}

const putEntityTypeData = (req,res) => {
    const id = req.params.id
    EntityType.findOneAndUpdate({enttypeid: id},{enttypedesc: req.body.enttypedesc})
        .then((result) => res.json({message: 'Entity updated successfully'}))
        .catch((err) => res.json({error: err}))
}

const addChildEntityTypeData = (req,res) => {
    const id = req.params.id
    req.body.enttypesubset = id
    const Entity = new EntityType(req.body)
    //post data
    Entity.save()
        .then((result) => res.json({message: 'Entity child added successfully'}))
        .catch((err) => res.json({error: err}))
    //put data
    EntityType.findOneAndUpdate({enttypeid: id},{$inc: {child : 1}})
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
}

const deleteEntityTypeData = (req,res) => {
    const id = req.params.id
    let parentId = 0
    EntityType.findOne({enttypeid: id}, (err,data) => {
        if(data.enttypesubset != 0){
            EntityType.findOneAndUpdate({enttypeid : data.enttypesubset},{$inc: {child : -1}})
                .then((result) => console.log('res',result))
                .catch((err) => console.log('err',err))
        }
    })
    EntityType.findOneAndRemove({enttypeid: id})
        .then((result) => res.json({message: 'Entity deleted successfully'}))
        .catch((err) => res.json({error: err}))
}

module.exports = {
    testController,
    getAllEntityTypeData,
    getEntityTypeData,
    getchildEntityTypeData,
    postEntityTypeData,
    putEntityTypeData,
    addChildEntityTypeData,
    deleteEntityTypeData
}