const ApiError = require('../error/ApiError')
class UserControllers {
    async registration(req,res){
        res.json('working register')
    }
    
    async login(req,res){
        res.json('working login')
    }
    async check(req,res,next){



        const {id} = req.query
        // res.json()
        if(!id){
           return next(ApiError.badRequest('not id'))
        }
        res.json(id)
    }
}

module.exports = new UserControllers()