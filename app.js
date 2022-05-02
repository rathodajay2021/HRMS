const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const entityRouters = require('./routes/entityRoutes')
const entityDefinationRouters = require('./routes/entityDefinationRoutes')
const entityLinkageRouters = require('./routes/entityLinkageRoutes')
const createEntity = require('./routes/createEntityRoutes')
const createRelationRouters = require('./routes/createRelationRoutes')
const validRelationRouters = require('./routes/validRelationRoutes')
const createhierarchyRouters = require('./routes/createHieararchyRoutes')

const app = express()   //server created

app.use(bodyParser.json())        // it will provide data which is submit form the form with put request
app.use(express.urlencoded({ extended: true}))    // it will provide data which is submit form the form with post request
app.use(cors())

const dbURL = process.env.URL || `mongodb+srv://MERN:reset123@nodetuts.bql7y.mongodb.net/entityDB?retryWrites=true&w=majority`
const PORT_NO = process.env.URL || 9485
mongoose.connect(dbURL,{useNewUrlParser: true  , useUnifiedTopology : true})
    .then(result => app.listen(PORT_NO), console.log(`connnection is establised on port no ${PORT_NO}`))
    .catch((err) => console.log(err))

app.use('/entity', entityRouters)
app.use('/entity', entityDefinationRouters)
app.use('/entity', entityLinkageRouters)
app.use('/entity', createEntity)
app.use('/relations', createRelationRouters)
app.use('/relations', validRelationRouters)
app.use('/hierarchy', createhierarchyRouters)