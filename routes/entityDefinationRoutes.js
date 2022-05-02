const express = require('express')

const router = express.Router()
const controller = require('../controllers/entityDefinationController')

router.get('/api/entitydetaildefinition/Getentitydetaildefinition',controller.getEntityDefintionData)
router.post('/api/entitydetaildefinition/Postentitydetaildefinition',controller.postEntityDefintionData)
router.put('/api/entitydetaildefinition/Putentitydetaildefinition/:id',controller.putEntityDefintionData)
router.delete('/api/entitydetaildefinition/Deleteentitydetaildefinition/:id',controller.deleteEntityDefintionData)

module.exports = router