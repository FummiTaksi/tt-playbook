import React, { ReactElement } from 'react'
import { SelectableExercise } from './ExerciseForm'

interface Props {
  exercises: SelectableExercise[]
  onSelectExercise: (exercise: SelectableExercise) => void
}

export const UnselectedExercises = ({
  exercises,
  onSelectExercise,
}: Props): ReactElement => {
  return (
    <ul>
      {exercises.map((exercise) => {
        return (
          <div key={exercise.id}>
            <p>{exercise.title.value_en}</p>
            <button onClick={() => onSelectExercise(exercise)}>SELECT</button>
          </div>
        )
      })}
    </ul>
  )
}
