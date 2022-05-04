const createHieararchyModal = require('../models/createHierarchyModal')
const createHierarchyLevelModal = require('../models/createHierarchyLevelModal')

const gethierarchyLevelData = (req,res) => {
    createHierarchyLevelModal.find().populate({path: 'enthtypeid', select :'enthtypeid enthname'})
        .then(result => {
            let dataToSend = []
            for (let i = 0; i < result.length; i++) {
                if(result[i].enthtypeid){
                    dataToSend.push(result[i])
                }
            }
            console.log('data we are gonna send',dataToSend)
            res.json(dataToSend)
        })
        .catch(err => console.log(err))
}

const posthierarchyLevelData = (req,res) => {
    console.log(req.body)
    let maxlevel = ''
    createHieararchyModal.findById( req.body.enthtypeid, (err,data) => {
        console.log(data)
        maxlevel = data.maxnumlevel
        createHierarchyLevelModal.find({enthtypeid: req.body.enthtypeid}, (err,data) => {
            for (let i = 0; i < data.length; i++) {
                if(data[i].enthlevel == req.body.enthlevel){   //to make sure that you are not add same hierarchy level no
                    return res.json({message: 'That level of Hierarchy already exist, Please type another Hierarchy level', errorMessage: 1})
                }
            }
            if(data.length <= maxlevel){        // to check if you are not adding more hierarchy level than maxlevel
                if(req.body.enthlevel <= maxlevel){     // to check if you are not adding more hierarchy level no than maxlevel no
                    const hierarchyLevel = new createHierarchyLevelModal(req.body)  //if everything is fine then we wil get the data
                    hierarchyLevel.save()
                        .then(result => res.json({message: 'Hierarchy level added successfully', errorMessage: 0 , res: result}))
                        .catch(err => console.log(err))
                }else{
                    return res.json({message: 'Sorry but Hierarchy level no cannot exceed than maxlevel no', errorMessage: 1, maxlevel: maxlevel })
                }
            }else{
                return res.json({message: 'Sorry but you cannot create hierarchy level more than max level', errorMessage: 1, maxlevel: maxlevel })
            }
        })
    })
}

const puthierarchyLevelData = (req,res) => {
    const id = req.params.id
    createHierarchyLevelModal.findByIdAndUpdate(id, req.body)
        .then(result => res.json({message: 'Hierarchy level updated successfully', results: result}))
        .catch(err => console.log(err))
} 

const deletehierarchyLevelData = (req,res) => {
    const id = req.params.id
    createHierarchyLevelModal.findByIdAndDelete(id)
        .then(result => res.json({message: 'Hierarchy level deleted successfully', results: result}))
        .catch(err => console.log(err))
} 

module.exports = {
    gethierarchyLevelData,
    posthierarchyLevelData,
    puthierarchyLevelData,
    deletehierarchyLevelData
}