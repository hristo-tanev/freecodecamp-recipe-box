import mongoose from 'mongoose'

import Recipe from '../models/Recipe'

mongoose.connect('mongodb://localhost/recipies')
let db = mongoose.connection
db.once('open', () => {
  console.log('Connection to "recipies" is now open...')
})

const handleRoutes = (app) => {
  app.get('/recipies', (request, response) => {
    Recipe.find({}, (error, recipies) => {
      if (error) {
        throw error
      }

      response.send({ status: 200, recipies })
    })
  })
}

export default handleRoutes
