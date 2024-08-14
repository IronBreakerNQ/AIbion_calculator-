const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BWCraftSchema = new Schema({
    name: { type: String},
    material1: {type: String},
    material2: {type: String},
    quantity1:{type: Number},
    quantity2:{type: Number},
    sellOrder:{
            city: { type: String },
            price: { type: String },
            lastUpdate: {type: String},
    },
    buyOrder: {
            city: { type: String },
            price: { type: String },
            lastUpdate: {type: String},
    }
});

const BWCraft = mongoose.model('BWCraft', BWCraftSchema);

module.exports =BWCraft;
