const initialState = {
  recipies: [],
  busy: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_RECIPIES_REQUEST': {
      return Object.assign({}, state, { busy: true })
    }
    case 'FETCH_RECIPIES_SUCCESS': {
      const { recipies } = action.payload
      return Object.assign({}, state, { recipies, busy: false })
    }
    case 'FETCH_RECIPIES_FAIL': {
      return initialState
    }
  }
  return state
}
