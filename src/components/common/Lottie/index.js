import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import lottie from 'lottie-web'

const Lottie = (props) => {
  const el = useRef(null)
  const anim = useRef(null)

  useEffect(() => {
    const { options, eventListeners } = props

    const {
      loop,
      autoplay,
      animationData,
      rendererSettings,
      segments,
    } = options

    const newOptions = {
      container: el.current,
      renderer: 'svg',
      loop: loop !== false,
      autoplay: autoplay !== false,
      segments: segments !== false,
      animationData,
      rendererSettings,
    }

    const sumOptions = { ...options, ...newOptions }

    anim.current = lottie.loadAnimation(sumOptions)
    registerEvents(eventListeners)

    if (props.isStopped) {
      stop()
    } else if (props.segments) {
      playSegments()
    } else {
      play()
    }

    pause()
    setSpeed()
    setDirection()
    return () => {
      deRegisterEvents(props.eventListeners)
      destroy()
      options.animationData = null
      anim.current = null
    }
  })

  const setSpeed = () => {
    anim.current.setSpeed(props.speed)
  }

  const setDirection = () => {
    anim.current.setDirection(props.direction)
  }

  const play = () => {
    anim.current.play()
  }

  const playSegments = () => {
    anim.current.playSegments(props.segments)
  }

  const stop = () => {
    anim.current.stop()
  }

  const pause = () => {
    if (props.isPaused && !anim.isPaused) {
      anim.current.pause()
    } else if (!props.isPaused && anim.isPaused) {
      anim.current.pause()
    }
  }

  const destroy = () => {
    anim.current.destroy()
  }

  const registerEvents = (eventListeners) => {
    eventListeners.forEach((eventListener) => {
      anim.current.addEventListener(
        eventListener.eventName,
        eventListener.callback
      )
    })
  }

  const deRegisterEvents = (eventListeners) => {
    eventListeners.forEach((eventListener) => {
      anim.current.removeEventListener(
        eventListener.eventName,
        eventListener.callback
      )
    })
  }

  const handleClickToPause = () => {
    // The pause() method is for handling pausing by passing a prop isPaused
    // This method is for handling the ability to pause by clicking on the animation
    if (anim.current.isPaused) {
      anim.current.play()
    } else {
      anim.current.pause()
    }
  }

  const {
    width,
    height,
    ariaRole,
    ariaLabel,
    isClickToPauseDisabled,
    title,
  } = props

  const getSize = (initial) => {
    let size

    if (typeof initial === 'number') {
      size = `${initial}px`
    } else {
      size = initial || '100%'
    }

    return size
  }

  const lottieStyles = {
    width: getSize(width),
    height: getSize(height),
    overflow: 'hidden',
    margin: '0 auto',
    outline: 'none',
    ...props.style,
  }

  const onClickHandler = isClickToPauseDisabled
    ? () => null
    : handleClickToPause

  return (
    <div
      ref={el}
      style={lottieStyles}
      onClick={onClickHandler}
      title={title}
      role={ariaRole}
      aria-label={ariaLabel}
      tabIndex='0'
    />
  )
}

export default Lottie

Lottie.propTypes = {
  eventListeners: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isStopped: PropTypes.bool,
  isPaused: PropTypes.bool,
  speed: PropTypes.number,
  segments: PropTypes.arrayOf(PropTypes.number),
  direction: PropTypes.number,
  ariaRole: PropTypes.string,
  ariaLabel: PropTypes.string,
  isClickToPauseDisabled: PropTypes.bool,
  title: PropTypes.string,
  style: PropTypes.string,
}

Lottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: 'button',
  ariaLabel: 'animation',
  isClickToPauseDisabled: false,
  title: '',
}
