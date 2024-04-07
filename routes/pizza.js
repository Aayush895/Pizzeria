const express = require('express')
const { Pizza } = require('../models/pizza')
const { Ingredient } = require('../models/ingridients')
const {fetchPizza, fetchIngredients} = require('../controller/pizza')
const router = express.Router()

router.get('/pizza', fetchPizza)
router.get('/ingredients', fetchIngredients)

module.exports = router