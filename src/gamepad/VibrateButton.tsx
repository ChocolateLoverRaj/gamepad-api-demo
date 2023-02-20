import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { FC } from 'react'
import { cx, css } from '@emotion/css'

const VibrateButton: FC = () => {
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      console.log('click!');
      (ref.current as HTMLButtonElement).click()
    }
  })

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
