import reactObserver from 'observables/lib/reactObserver/reactObserver'
import { FC, useMemo } from 'react'
import getObservableGamepad from '../observableGamepad/getObservableGamepad'
import Props from './Props'
import never from 'never'

const GamepadButtons: FC<Props> = reactObserver<Props>((observe, { gamepadIndex: gamepad }) => {
  const observableGamepad = useMemo(() => getObservableGamepad(gamepad), [gamepad])
  const { timestamp } = observe(observableGamepad) ?? never()

  return (
    <>
      Timestamp (last input): {timestamp}
    </>
  )
})

export default GamepadButtons
