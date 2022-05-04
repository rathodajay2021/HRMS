const express = require('express')

const router = express.Router()
const controller = require('../controllers/createHierarchyLevelController')

router.get('/api/gethierarchylevel/gethierarchylevel', controller.gethierarchyLevelData)
router.post('/api/entityhierarchytypeleveldefination/Postentityhierarchytypeleveldefination', controller.posthierarchyLevelData)
router.put('/api/entityhierarchytypeleveldefination/Putentityhierarchytypeleveldefination/:id', controller.puthierarchyLevelData)
router.delete('/api/entityhierarchytypeleveldefination/Deleteentityhierarchytypeleveldefination/:id', controller.deletehierarchyLevelData)

module.exports = router