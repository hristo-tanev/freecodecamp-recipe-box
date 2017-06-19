import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import Recipe from '../models/Recipe'

mongoose.connect('mongodb://localhost/recipies')
let db = mongoose.connection
db.once('open', () => {
  console.log('Connection to "recipies" is now open...')
})

const handleRoutes = (app) => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())

  app.get('/recipies', (request, response) => {
    Recipe.find({}, (error, recipies) => {
      if (error) {
        throw error
      }

      response.send({ status: 200, recipies })
    })
  })

  app.post('/recipies', (request, response) => {
    const { name, ingredients } = request.body
    let recipe = new Recipe({ name, ingredients })
    recipe.save()
    response.send({ status: 200 })
  })
}

export default handleRoutes
