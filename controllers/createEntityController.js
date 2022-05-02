const createEntityModal = require('../models/createEntityModal')

const getCreateEntityData = (req,res) => {
    createEntityModal.find().populate("entitytypeid" , "enttypedesc")
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

const postCreateEntityData = (req,res) => {
    const entiyModal = new createEntityModal(req.body)
    entiyModal.save()
        .then(result => res.json({message: 'Entity created successfully', res: result}))
        .catch(err => console.log(err))
}

const putCreateEntityData =(req,res)=>{
    let id=req.params.id
    createEntityModal.findOneAndUpdate({entityid :id},req.body)
        .then(result => res.json({message:'Entity updated successfully',res:result}))
        .catch(err => console.log(err))
}

const deleteCreateEntityData =(req,res)=>{
    let id=req.params.id
    createEntityModal.findOneAndRemove({entityid:id})
        .then(result => res.json({message:'Entity Deleted successfully',res:result}))
        .catch(err => console.log(err))

} 

module.exports = {
    getCreateEntityData,
    postCreateEntityData,
    putCreateEntityData,
    deleteCreateEntityData
}
