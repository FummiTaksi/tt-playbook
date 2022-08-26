import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import { UnselectedExercises } from './UnselectedExercises'
import { observer } from 'mobx-react'
import { SelectedExercises } from './SelectedExercises'
import { ExerciseCatalog } from '../exercise-catalog'

interface Props {
  exerciseCatalog: ExerciseCatalog
  exercises: Exercise[]
}

export const ExerciseForm = observer(
  ({ exercises, exerciseCatalog }: Props): ReactElement => {
    return (
      <div>
        <UnselectedExercises
          exercises={exercises}
          onSelectExercise={(exercise) => exerciseCatalog.add(exercise)}
        />
        <SelectedExercises
          exercises={exerciseCatalog.exercises}
          onUnselectExercise={(index) => exerciseCatalog.remove(index)}
        />
      </div>
    )
  },
)
