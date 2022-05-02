const EntityDef = require('../models/entityDefinationModal')

const getEntityDefintionData = (req,res) => {
    EntityDef.find()
        .then(result => res.json(result))
        .catch(err => res.json({error: err}))
}

const postEntityDefintionData = (req,res) => {
    EntityDef.findOne({detailtypedesc1: req.body.detailtypedesc1},(err,data) => {
        if(!data){
            console.log('enter in if (data not exist)')
            EntityDef.find()
                .then(result => {
                    console.log(result)
                    let maxValue = 0
                    result.map(DefData => {
                        if(maxValue <= DefData.detailtypel1){
                            maxValue = DefData.detailtypel1
                        }
                    })
                    const Def = new EntityDef({
                        detailtypel1: maxValue + 1,
                        detailtypedesc1: req.body.detailtypedesc1,
                        detailtypel2: 1,
                        detailtypedesc2: req.body.detailtypedesc2,
                    })
                    Def.save()
                        .then((result) => res.json({message: 'Entity defination created successfully'}))
                        .catch((err) => res.json({error: err}))
                })
                .catch(err => console.log(err))
        }else{
            console.log('enter in else (data exist)')
            EntityDef.find({detailtypedesc1: req.body.detailtypedesc1}).countDocuments((err, docNo) => {
                const Def = new EntityDef({
                    detailtypel1: data.detailtypel1,
                    detailtypedesc1: req.body.detailtypedesc1,
                    detailtypel2: docNo+1,
                    detailtypedesc2: req.body.detailtypedesc2,
                })
                Def.save()
                    .then((result) => res.json({message: 'Entity defination created successfully'}))
                    .catch((err) => res.json({error: err}))
            })
        }
    })
}

const putEntityDefintionData = (req,res) => {
    id = req.params.id
    EntityDef.findOneAndUpdate({detaildefnid: id},req.body)
        .then(result=> res.json({message: 'Entity defination updated successfully'}))
        .catch(err=> res.json({error: err}))
}

const deleteEntityDefintionData = (req,res) => {
    id = req.params.id
    EntityDef.findOneAndRemove({detaildefnid: id})
        .then(result=> res.json({message: 'Entity defination deleted successfully'}))
        .catch(err=> res.json({error: err}))
}

module.exports = {
    getEntityDefintionData,
    postEntityDefintionData,
    putEntityDefintionData,
    deleteEntityDefintionData
}