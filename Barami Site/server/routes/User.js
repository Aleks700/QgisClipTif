const Router = require('express')
const router = new Router()
const userControllers = require('../controllers/userController')


router.post('/registration', userControllers.registration)
router.post('/login',userControllers.login)
router.get('/auth',(req,res)=>{
    res.json({message:'order'})
});
router.get('/',(req,res)=>{
    res.json({message:'order origin'})
});
router.get('/check',userControllers.check);


module.exports = router