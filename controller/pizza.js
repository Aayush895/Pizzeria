const Pizza = require('../models/pizza')
const Ingredient = require('../models/ingridients')

const fetchPizza = async (req, res) => {
  try {
    const pizzas = await Pizza.find()
    res.send({
      message: "Pizzas fetched successfully",
      pizzas

    })
  } catch (error) {
    res.send({
      message: "Error in fetching the pizza"
    })
  }
}

const fetchIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find()
    res.send({
      message: "Ingredients fetched successfully",
      ingredients
    })
  } catch (error) {
    res.send({
      message: "Error in fetching the pizza"
    })
  }
}

module.exports = {
    fetchPizza,
    fetchIngredients
}