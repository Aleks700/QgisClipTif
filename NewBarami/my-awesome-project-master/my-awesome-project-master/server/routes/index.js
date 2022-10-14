const Router = require('express')
const router = new Router()
const userRouter = require('./User');
const ordersRouter = require('./Order');






router.use('/user',userRouter)
router.use('/order',ordersRouter)

// router.use('/user')
// router.use('/user')

module.exports = router