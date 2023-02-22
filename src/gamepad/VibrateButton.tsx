import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { FC, useCallback } from 'react'
import { cx, css } from '@emotion/css'
import useOnAButtonPress from '../useOnAButtonPress/useOnAButtonPress'

const VibrateButton: FC = () => {
  const { ref, focused } = useFocusable()

  useOnAButtonPress(useCallback(() => {
    ;(ref.current as HTMLButtonElement).click()
    console.log('vibrate')
  }, [ref]), focused)

  return (
    <button
      type='submit'
      ref={ref}
      className={cx({
        [css({
          backgroundColor: 'green'
        })]: focused
      })}
    >
      Vibrate
    </button>
  )
}

export default VibrateButton
