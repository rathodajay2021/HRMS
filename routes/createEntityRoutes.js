const express = require('express')

const router = express.Router()
const controller = require('../controllers/createEntityController')

router.get('/api/entitymaster/Getentitymaster',controller.getCreateEntityData)
router.post('/api/entitymaster/Postentitymaster',controller.postCreateEntityData)
router.put('/api/entitymaster/Putentitymaster/:id',controller.putCreateEntityData)
router.delete('/api/entitymaster/Deleteentitymaster/:id',controller.deleteCreateEntityData)

module.exports = router
