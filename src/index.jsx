import React from 'react'
import ReactDOM from 'react-dom'
import WeatherApp from './WeatherApp'
import './styles/styles.scss'
import './Grid.css'

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById('WeatherApp')
)
