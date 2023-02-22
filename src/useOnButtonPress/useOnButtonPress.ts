import Listener from 'observables/lib/Listener'
import Observable from 'observables/lib/Observable'
import { useEffect } from 'react'

const useOnButtonPress = (observableButtonPressed: Observable<boolean | undefined>, callback: () => void): void => {
  useEffect(() => {
    console.log('hi')
    let wasPressed: boolean | undefined
    const listener: Listener<[]> = () => {
      const isPressed = observableButtonPressed.getValue()
      if (isPressed !== wasPressed && isPressed === true) callback()
      wasPressed = isPressed
    }
    observableButtonPressed.addRemove.add(listener)
    return () => observableButtonPressed.addRemove.remove(listener)
  }, [observableButtonPressed, callback])
}

export default useOnButtonPress
