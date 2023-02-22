import Observable from 'observables/lib/Observable'
import createComputedObservable from '../createComputedObservable'

const getObservableButtonPressed = (observableButton: Observable<GamepadButton | undefined>): Observable<boolean | undefined> => createComputedObservable(observe => {
  return observe(observableButton)?.pressed
})

export default getObservableButtonPressed
