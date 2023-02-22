import { css, cx } from '@emotion/css'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { FC } from 'react'
import useOnAButtonPress from '../useOnAButtonPress/useOnAButtonPress'
import Props from './Props'

const StopButton: FC<Props> = ({ gamepadIndex }) => {
  const onClick = (): void => {
    (navigator.getGamepads()[gamepadIndex] as any).vibrationActuator.playEffect('dual-rumble', {
      duration: 0,
      startDelay: 0,
      strongMagnitude: 0,
      weakMagnitude: 0
    })
    console.log('stop')
  }

  const { ref, focused } = useFocusable()
  useOnAButtonPress(onClick, focused)

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cx({
        [css({
          backgroundColor: 'red'
        })]: focused
      })}
    >
      Stop
    </button>
  )
}

export default StopButton
