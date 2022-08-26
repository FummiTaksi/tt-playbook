import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

interface Props {
  exercises: Exercise[]
  onUnselectExercise: (index: number) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const SelectedExercises = ({
  exercises,
  onUnselectExercise,
}: Props): ReactElement => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <p>
        {t('selectedExerciseList.amountOfExercises', {
          amount: exercises.length,
        })}
      </p>
      <ul>
        {exercises.map((exercise, index) => {
          return (
            <Container key={`${index}-exerciseId-${exercise.id}`}>
              <p>{exercise.title.getValue(i18n.language)}</p>
              <button onClick={() => onUnselectExercise(index)}>
                {t('selectedExerciseList.unselect')}
              </button>
            </Container>
          )
        })}
      </ul>
    </div>
  )
}
