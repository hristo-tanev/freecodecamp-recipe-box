import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import App from './components/App'

const store = configureStore()
const app = document.getElementById('app')

render(<Provider store={store}>
          <App />
       </Provider>, app)
