import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SelectableExercise } from './ExerciseForm'

interface Props {
  exercises: SelectableExercise[]
  onSelectExercise: (exercise: SelectableExercise) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const UnselectedExercises = ({
  exercises,
  onSelectExercise,
}: Props): ReactElement => {
  return (
    <ul>
      {exercises.map((exercise) => {
        return (
          <Container key={exercise.id}>
            <p>{exercise.title.value_en}</p>
            <button onClick={() => onSelectExercise(exercise)}>SELECT</button>
          </Container>
        )
      })}
    </ul>
  )
}
