const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/pizza')
const app = express()


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
  await mongoose.connect('mongodb+srv://aayush895:8xFE0BL1Zs7RJP1h@cluster0.n7reeip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  console.log('Server & database connected successfully')
})