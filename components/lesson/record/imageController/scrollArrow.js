/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/core'

export default function ScrollArrow({ className, direction }) {
  function handleMouseOver() {
    console.log('scroll, ', direction)
  }

  const iconStyle = css({
    display: 'block',
    width: '33px',
    height: 'auto',
    cursor: 'pointer',
    margin: 'auto',
    transform: direction === 'left' ? 'rotate(180deg)' : 'none',
  })

  return (
    <button css={buttonStyle} className={className} onMouseOver={handleMouseOver}>
      <img src="/img/icon/double-arrows.svg" css={iconStyle} />
    </button>
  )
}

const buttonStyle = css({
  opacity: '0.3',
  transition: 'opacity 0.5s',
  [':hover']: {
    opacity: '1',
  },
})