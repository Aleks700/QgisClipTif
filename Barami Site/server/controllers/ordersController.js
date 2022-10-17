const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError')

const {Order} = require('../models/models');
// const ApiError = require('../error/ApiError')


class OrderControllers{
    async create(req,res){
        const {orderId} = req.body
        const {img} = req.files
        const filename = uuid.v4()+'.jpg';
        img.mv(path.resolve(__dirname,'..','static',filename))
        try{
            const order = await Order.create({storeId:orderId})
            res.json('working create')
        }catch(err){
            next(ApiError.badRequest(err.message))
        }
    }
    async getAll(req,res){
        const order = await Order.findAll();
        res.json(order)
    }
}
module.exports =  new OrderControllers()