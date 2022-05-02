const express = require('express')

const router = express.Router()
const controller = require('../controllers/createHiearachyController')

router.get('/api/entityhierarchytypemaster/Getentityhierarchytypemaster', controller.getHierarchyData)
router.post('/api/entityhierarchytypemaster/Postentityhierarchytypemaster/', controller.postHierarchyData)
router.put('/api/entityhierarchytypemaster/Putentityvalidrelationship/:id', controller.putHierarchyData)
router.delete('/api/entityhierarchytypemaster/Deleteentityhierarchytypemaster/:id', controller.deleteHierarchyData)

module.exports = router