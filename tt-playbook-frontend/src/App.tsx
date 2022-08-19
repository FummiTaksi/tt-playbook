import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

const App = (): ReactElement => {
  const { t } = useTranslation()
  return (
    <div className="App">
      <h1>{t('frontpage.welcome')}</h1>
    </div>
  )
}

export default App
