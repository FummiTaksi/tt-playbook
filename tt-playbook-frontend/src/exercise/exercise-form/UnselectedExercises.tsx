import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Exercise } from '../exercise'
import { useTranslation } from 'react-i18next'

interface Props {
  exercises: Exercise[]
  onSelectExercise: (exercise: Exercise) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const UnselectedExercises = ({
  exercises,
  onSelectExercise,
}: Props): ReactElement => {
  const { t } = useTranslation()

  return (
    <ul>
      {exercises.map((exercise) => {
        return (
          <Container key={exercise.id}>
            <p>{exercise.title.value_en}</p>
            <button onClick={() => onSelectExercise(exercise)}>
              {t('unselectedExerciseList.select')}
            </button>
          </Container>
        )
      })}
    </ul>
  )
}
