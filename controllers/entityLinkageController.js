const EnittyLinkage = require('../models/entityLinkageModal')
const EntityDef = require('../models/entityDefinationModal')

const getEntityLinkage = (req, res) => {
    EnittyLinkage.find({ enttypeid: req.params.id }, (err, Linkagedata) => {
        console.log(Linkagedata)
        let dataToSend = []
        EntityDef.find()
            .then(result => {
                for (let j = 0; j < result.length; j++) {
                    let match = 0
                    for (let i = 0; i < Linkagedata.length; i++) {
                        if (Linkagedata[i].detaildefnid == result[j].detaildefnid) {
                            match = 1
                        }
                    }
                    if (match == 0) {
                        dataToSend.push({
                            detaildefnid: result[j].detaildefnid,
                            detailtypedesc1: result[j].detailtypedesc1,
                            detailtypedesc2: result[j].detailtypedesc2,
                            status: result[j].status,
                            cnt: 0
                        })
                    } else {
                        dataToSend.push({
                            detaildefnid: result[j].detaildefnid,
                            detailtypedesc1: result[j].detailtypedesc1,
                            detailtypedesc2: result[j].detailtypedesc2,
                            status: result[j].status,
                            cnt: 1
                        })
                    }
                }
                res.json(dataToSend)
            })
            .catch(err => console.log(err))
    })
}

const postEntityLinage = (req, res) => {
    console.log('data', req.body)
    const linkage = new EnittyLinkage(req.body)
    linkage.save()
        .then(result => res.json({ message: 'linkage added succefully', result }))
        .catch(err => console.log(err))
}

module.exports = {
    getEntityLinkage,
    postEntityLinage
}