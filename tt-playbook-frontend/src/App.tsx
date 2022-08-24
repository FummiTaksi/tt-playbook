import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { ExerciseForm } from './exercise/exercise-form/ExerciseForm'
import { exercises } from './constants'
import { ExerciseCatalog } from './exercise/exercise-catalog'
import { LanguageSelector } from './language/LanguageSelector'

interface Props {
  exerciseCatalog: ExerciseCatalog
}
const App = ({ exerciseCatalog }: Props): ReactElement => {
  const { t } = useTranslation()

  return (
    <div className="App">
      <LanguageSelector />
      <h1>{t('frontpage.welcome')}</h1>
      <ExerciseForm exercises={exercises} exerciseCatalog={exerciseCatalog} />
    </div>
  )
}

export default App
