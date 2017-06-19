import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipies } from '../actions/recipeActions'

@connect((store) => {
  return {
    recipies: store.recipies
  }
})

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      ingredients: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipies())
    setTimeout(() => {}, 1000)
  }

  getRecipeName(e) {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  getRecipeIngredients(e) {
    e.preventDefault()
    this.setState({
      ingredients: e.target.value
    })
  }

  addNewRecipe() {
    const { name, ingredients } = this.state
    console.log(name + ' ' + ingredients)
    this.setState({
      name: '',
      ingredients: ''
    })
  }

  render() {
    return (
      <div class="container">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addRecipe">Add Recipe</button>
        <div class="modal fade" id="addRecipe" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Add Recipe</h4>
              </div>
              <div class="modal-body">
                <label><strong>Recipe name</strong></label>
                <input type="text" class="form-control" onChange={this.getRecipeName.bind(this)} />
                <br />
                <label><strong>Recipe ingredients</strong></label>
                <textarea class="form-control" rows="5" onChange={this.getRecipeIngredients.bind(this)}></textarea>
              </div>
              <div class="modal-footer">
                <button onClick={this.addNewRecipe.bind(this)} type="button" class="btn btn-primary" data-dismiss="modal">Add Recipe</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
