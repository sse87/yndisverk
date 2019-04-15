/* global localStorage */
import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'

import * as serviceWorker from './serviceWorker'

import { version } from '../package.json'
window.appVersion = version

ReactDOM.render(<App />, document.getElementById('root'))

const config = {
  onUpdate: () => {
    // Save current version to localStorage
    localStorage.setItem('oldVersion', version)
  }
}
serviceWorker.register(config)
