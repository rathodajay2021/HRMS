const express = require('express')

const router = express.Router()
const controller = require('../controllers/createRelationController')

router.get('/api/entityrelationshipmaster/Getentityrelationshipmaster', controller.getRelationData)
router.post('/api/entityrelationshipmaster/Postentityrelationshipmaster', controller.postRelationData)
router.put('/api/entityrelationshipmaster/Putentityrelationshipmaster/:id', controller.putRelationData)
router.delete('/api/entityrelationshipmaster/Deleteentityrelationshipmaster/:id', controller.deleteRelationData)

module.exports = router