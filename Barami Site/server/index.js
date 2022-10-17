const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const PORT = process.env.PORT||5000
const models = require('./models/models')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const handlerError = require('./middleware/ErrorHandlingMiddleware')

app.use(cors())
app.use(express.json())
// app.use(express.static('./static'));
app.use(fileUpload({}));
app.use('/',router)

app.use(handlerError);


app.get('/test',(req,res)=>{
    res.status(200).json({message:'working'})
})

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
    }catch(e){
        console.log(e)
    }
}
start()



app.listen(PORT, ()=>{console.log(`start ${PORT}`)})