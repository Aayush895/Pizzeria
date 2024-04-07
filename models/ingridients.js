const mongoose = require('mongoose')
const { Schema } = mongoose

const ingredients = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
})

const Ingredient = mongoose.model('Ingridient', ingredients)

module.exports = Ingredient