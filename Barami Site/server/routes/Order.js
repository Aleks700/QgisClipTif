const Router = require('express')
const router = new Router()
const orderController = require('../controllers/ordersController')


router.post('/create',orderController.create)
router.get('/',orderController.getAll)
router.get('/:id',(req,res)=>{
    res.json({message:'order'})
})



module.exports = router