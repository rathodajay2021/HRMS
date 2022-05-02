const express = require('express')
const router = express.Router()
const entityController = require('../controllers/entityController')

router.get('/', entityController.testController )
router.get('/api/entitytypemaster/Getentitytype_bysubset/', entityController.getAllEntityTypeData )
router.get('/api/entitytypemaster/Getentitytype_bysubset/0', entityController.getEntityTypeData )
router.get('/api/entitytypemaster/Getentitytype_bysubset/:id', entityController.getchildEntityTypeData )
router.post('/api/entitytypemaster/Postentitytypemaster', entityController.postEntityTypeData )
router.put('/api/entitytypemaster/Putentitytypemaster/:id', entityController.putEntityTypeData )
router.put('/api/entitytypemaster/Childentitytypemaster/:id', entityController.addChildEntityTypeData )
router.delete('/api/entitytypemaster/Deleteentitytypemaster/:id', entityController.deleteEntityTypeData )

module.exports = router