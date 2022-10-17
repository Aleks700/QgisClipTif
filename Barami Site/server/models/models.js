const sequelize = require('../db')
const { DataTypes } =  require('sequelize')


const User = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        unique: true, 
        autoIncrement: true},
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    passportID:{
        type: DataTypes.INTEGER,
        unique:true, 
        
    }
})
const Order = sequelize.define('order',{
    id:{
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        unique: true, 
        autoIncrement: true},
    storeId: {
        type: DataTypes.STRING,
    }
})


User.hasMany(Order)
Order.belongsTo(User)


module.exports = {
    User, Order
};