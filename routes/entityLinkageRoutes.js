const express = require('express')
const controller = require('../controllers/entityLinkageController')

const router = express.Router()

router.get('/api/entitydetaildefinition/Getentitylinkagedefination/:id',controller.getEntityLinkage)
router.post('/api/entitytypelinkage/Postentitytypelinkage',controller.postEntityLinage)

module.exports = router