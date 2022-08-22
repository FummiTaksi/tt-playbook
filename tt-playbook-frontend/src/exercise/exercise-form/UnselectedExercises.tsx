import React, { ReactElement } from 'react'
import { SelectableExercise } from './ExerciseForm'

interface Props {
  exercises: SelectableExercise[]
}

export const UnselectedExercises = ({ exercises }: Props): ReactElement => {
  return (
    <ul>
      {exercises.map((exercise) => {
        return (
          <div key={exercise.id}>
            <p>{exercise.title.value_en}</p>
            <button>SELECT</button>
          </div>
        )
      })}
    </ul>
  )
}
