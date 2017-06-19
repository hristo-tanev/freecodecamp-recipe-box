import mongoose from 'mongoose'

const Schema = mongoose.Schema

let recipeSchema = new Schema({
  name: String,
  ingredients: String
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe
