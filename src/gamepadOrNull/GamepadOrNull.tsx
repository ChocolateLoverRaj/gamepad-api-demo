import reactObserver from 'observables/lib/reactObserver/reactObserver'
import { useMemo } from 'react'
import Gamepad from '../gamepad/Gamepad'
import GamepadNull from '../gamepadNull/GamepadNull'
import getObservableGamepad from '../observableGamepad/getObservableGamepad'
import Props from './Props'

const GamepadOrNull = reactObserver<Props>((observe, { gamepadIndex }) => {
  const observableGamepad = useMemo(() => getObservableGamepad(gamepadIndex), [gamepadIndex])
  const gamepad = observe(observableGamepad)

  return (
    <div>
      {gamepad !== null
        ? <Gamepad gamepadIndex={gamepadIndex} />
        : <GamepadNull />}
    </div>
  )
})

export default GamepadOrNull
