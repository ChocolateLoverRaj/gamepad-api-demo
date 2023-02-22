import Compute from 'observables/lib/computedObservable/Compute'
import emit from 'observables/lib/emit/emit'
import Listener from 'observables/lib/Listener'
import Observable from 'observables/lib/Observable'

const createComputedObservable = <T>(compute: Compute<T>): Observable<T> => {
  const listeners = new Set<Listener<[]>>()
  const dependOnObservables = new Set<Observable<any>>()
  const internalListener: Listener<[]> = () => {
    addDependOnObservables()
    emit({
      forEach: Set.prototype.forEach.bind(listeners),
      inputs: []
    })
  }

  const addDependOnObservables = (): void => {
    observeDependOnStop()
    dependOnObservables.clear()
    compute(observable => {
      dependOnObservables.add(observable)
      return observable.getValue()
    })
    observeDependOnStart()
  }

  const observeDependOnStart = (): void => {
    dependOnObservables.forEach(({ addRemove: { add } }) => add(internalListener))
  }
  const observeDependOnStop = (): void => {
    dependOnObservables.forEach(({ addRemove: { remove } }) => remove(internalListener))
  }

  return {
    addRemove: {
      add: listener => {
        if (listeners.size === 0) {
          addDependOnObservables()
          observeDependOnStart()
        }
        listeners.add(listener)
      },
      remove: listener => {
        listeners.delete(listener)
        if (listeners.size === 0) {
          observeDependOnStop()
        }
      }
    },
    getValue: () => compute(({ getValue }) => getValue())
  }
}

export default createComputedObservable
