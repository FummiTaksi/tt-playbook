import React from 'react'
import './i18n'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ExerciseCatalog } from './exercise/exercise-catalog'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const exerciseCatalog = new ExerciseCatalog()
root.render(
  <React.StrictMode>
    <App exerciseCatalog={exerciseCatalog} />
  </React.StrictMode>,
)
