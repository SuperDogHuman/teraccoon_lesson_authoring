/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/core'

export default function SVGButton({ children, backgroundColor='inherit', color='inherit', borderColor='inherit', padding='0', disabled=false, onClick }) {
  const bodyStyle = css({
    display: 'block',
    width: '100%',
    height: '100%',
    padding: `${padding}px`,
    borderColor,
    backgroundColor,
    color,
    ':hover': {
      filter: 'brightness(80%)',
    },
    ':disabled': {
      opacity: 0.3,
      cursor: 'default',
    },
  })

  return (
    <button onClick={onClick} css={bodyStyle} disabled={disabled}>
      {children}
    </button>
  )
}