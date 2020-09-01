import React from 'react'
import ReactDOM from 'react-dom'
import { ButInProject } from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(<ButInProject />, document.getElementById('root'))

serviceWorker.unregister()
