const express = require('express')

const router = express.Router()
const controller = require('../controllers/validRelatinController')

router.get('/api/entityvalidrelationship/getentityvalidrelationship/',controller.getValidRelationData)
router.post('/api/entityvalidrelationship/Postentityvalidrelationship',controller.postValidRelationData)
router.put('/api/entityvalidrelationship/Putentityvalidrelationship/:id',controller.putValidRelationData)
router.delete('/api/entityvalidrelationship/Deleteentityvalidrelationship/:id',controller.deleteValidRelationData)

module.exports = router