import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

interface Props {
  exercises: Exercise[]
  onUnselectExercise: (exercise: Exercise) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const SelectedExercises = ({
  exercises,
  onUnselectExercise,
}: Props): ReactElement => {
  const { t } = useTranslation()
  return (
    <div>
      <p>
        {t('selectedExerciseList.amountOfExercises', {
          amount: exercises.length,
        })}
      </p>
      <ul>
        {exercises.map((exercise) => {
          return (
            <Container key={exercise.id}>
              <p>{exercise.title.value_en}</p>
              <button onClick={() => onUnselectExercise(exercise)}>
                {t('selectedExerciseList.unselect')}
              </button>
            </Container>
          )
        })}
      </ul>
    </div>
  )
}
