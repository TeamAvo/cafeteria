import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import Main from './components/Main'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import store from './components/reducers/store'

ReactDOM.render(
  <Provider store={createStore(store, applyMiddleware(reduxThunk))}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
