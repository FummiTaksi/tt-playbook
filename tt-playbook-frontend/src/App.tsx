import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { ExerciseForm } from './exercise/exercise-form/ExerciseForm'
import { exercises } from './constants'
import { ExerciseCatalog } from './exercise/exercise-catalog'

const App = (): ReactElement => {
  const { t } = useTranslation()

  const exerciseCatalog = new ExerciseCatalog()
  return (
    <div className="App">
      <h1>{t('frontpage.welcome')}</h1>
      <ExerciseForm exercises={exercises} exerciseCatalog={exerciseCatalog} />
    </div>
  )
}

export default App
