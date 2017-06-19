import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/recipies')
let db = mongoose.connection
db.once('open', () => {
  console.log('Connection to "recipies" is now open...')
})

const handleRoutes = (app) => {
  app.get('/recipies', (request, response) => {
    response.send({ status: 200 })
  })
}

export default handleRoutes
