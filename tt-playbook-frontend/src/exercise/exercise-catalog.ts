import { Exercise } from './exercise'
import { makeAutoObservable } from 'mobx'

export class ExerciseCatalog {
  exercises: Exercise[] = []

  constructor() {
    makeAutoObservable(this)
  }

  add(exercise: Exercise): void {
    const newExercises = [...this.exercises, exercise]
    this.exercises = newExercises
  }

  remove(index: number): void {
    const newExercises = [...this.exercises]
    newExercises.splice(index, 1)

    this.exercises = newExercises
  }
}
