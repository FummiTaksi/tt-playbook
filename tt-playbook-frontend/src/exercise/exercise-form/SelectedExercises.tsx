import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import styled from 'styled-components'

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
  return (
    <div>
      <p>You have selected {exercises.length} exercises</p>
      <ul>
        {exercises.map((exercise) => {
          return (
            <Container key={exercise.id}>
              <p>{exercise.title.value_en}</p>
              <button onClick={() => onUnselectExercise(exercise)}>
                UNSELECT
              </button>
            </Container>
          )
        })}
      </ul>
    </div>
  )
}
