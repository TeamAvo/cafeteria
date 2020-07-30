import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import Main from './components/Main.js'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
