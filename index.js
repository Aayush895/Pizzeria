const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/pizza')
const app = express()

dotenv.config()
app.use('/api/v1/pizzeria',router)
app.get('/api/health', (req, res) => {
  try {
    res.send('Express server is up and running!')
  } catch (error) {
    res.send({
      message: 'Error in the server'
    })
  }
})

app.listen(3000, async () => {
  await mongoose.connect(process.env.MONGODB_URL)
  console.log('Server & database connected successfully')
})