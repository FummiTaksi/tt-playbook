import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'

interface Props {
  exercises: Exercise[]
  onUnselectExercise: (exercise: Exercise) => void
}

export const SelectedExercises = ({
  exercises,
  onUnselectExercise,
}: Props): ReactElement => {
  return (
    <ul>
      {exercises.map((exercise) => {
        return (
          <div key={exercise.id}>
            <p>{exercise.title.value_en}</p>
            <button onClick={(e) => onUnselectExercise(exercise)}>
              UNSELECT
            </button>
          </div>
        )
      })}
    </ul>
  )
}
