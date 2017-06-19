import axios from 'axios'

export const fetchRecipiesRequest = () => ({ type: 'FETCH_RECIPIES_REQUEST' })
export const fetchRecipiesSuccess = (recipies) => ({ type: 'FETCH_RECIPIES_SUCCESS', payload: { recipies } })
export const fetchRecipiesFail = () => ({ type: 'FETCH_RECIPIES_FAIL' })

export function fetchRecipies() {
  return (dispatch) => {
    dispatch(fetchRecipiesRequest())
    axios({
      method: 'get',
      url: '/recipies'
    })
    .then((response) => {
      dispatch(fetchRecipiesSuccess(response.data.recipies))
    })
    .catch((error) => {
      dispatch(fetchRecipiesFail())
    })
  }
}
