import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/global/fonts.css'
import './styles/global/GENERAL'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

registerServiceWorker()
