const express = require('express')
const router = express.Router()
const entityController = require('../controllers/entityController')

router.get('/', entityController.testController )
router.get('/api/entitytypemaster/Getentitytype_bysubset', entityController.getEntityTypeData )
router.post('/api/entitytypemaster/Postentitytypemaster', entityController.postEntityTypeData )
router.put('/api/entitytypemaster/Putentitytypemaster/:id', entityController.putEntityTypeData )
router.delete('/api/entitytypemaster/Deleteentitytypemaster/:id', entityController.deleteEntityTypeData )

module.exports = router