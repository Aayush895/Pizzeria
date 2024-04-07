const mongoose = require('mongoose')
const { Schema } = mongoose

const pizzaSchema = new Schema({
  isVeg: {
    type: Boolean,
    require:true 
  },
  price: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  ingredients: {
    type: Array,
    require: true
  },
  toppings: {
    type: Array,
    require: true
  }
})

const Pizza = mongoose.model('Pizza', pizzaSchema)

module.exports = Pizza