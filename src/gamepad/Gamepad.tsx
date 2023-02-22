import { FC, useEffect } from 'react'
import Props from './Props'
import VibrateForm from './VibrateForm'
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import GamepadButtons from './GamepadButtons'

const Gamepad: FC<Props> = ({ gamepadIndex }) => {
  const { ref, focusKey, focusSelf } = useFocusable()

  useEffect(() => {
    focusSelf()
  }, [focusSelf])

  return (
    <FocusContext.Provider value={focusKey}>
      <GamepadButtons gamepadIndex={gamepadIndex} />
      <div ref={ref}>
        Connected gamepad
        <VibrateForm gamepadIndex={gamepadIndex} />
      </div>
    </FocusContext.Provider>
  )
}

export default Gamepad
