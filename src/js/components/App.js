import React from 'react'

export default class App extends React.Component {
  addRecipe() {
    console.log('adding a recipe...')
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
                <input type="text" class="form-control" />
                <br />
                <label><strong>Recipe ingredients</strong></label>
                <textarea class="form-control" rows="5"></textarea>
              </div>
              <div class="modal-footer">
                <button onClick={this.addRecipe.bind(this)} type="button" class="btn btn-primary" data-dismiss="modal">Add Recipe</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
