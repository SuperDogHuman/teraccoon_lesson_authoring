/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/core'
import { HexColorInput } from 'react-colorful'
import 'react-colorful/dist/index.css'

export default function DrawingConfigPanel(props) {
  const [showDrawingConfig, setShowDrawingConfig] = useState(false)
  const [panelPosition, setPanelposition] = useState({ top: 0, left: 0 })

  function handleShowPanel(e) {
    setPanelposition({ top: e.nativeEvent.pageY + 20, left: e.nativeEvent.pageX - 30 })
    setShowDrawingConfig(!showDrawingConfig)
  }

  function handleMenuClick(e) {
    e.stopPropagation()
  }

  function handleEraser() {
    props.setDrawingConfig({ eraser: true })
  }

  function handleColorChange(e) {
    const color = (typeof e === 'string') ? e : e.target.dataset.color
    props.setDrawingConfig({ eraser: false, color })
  }

  // 5/10/20

  const backgroundStyle = css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: showDrawingConfig ? 'block' : 'none'
  })

  const contextMenuStyle = css({
    borderRadius: '10px',
    filter: 'drop-shadow(2px 2px 2px gray)',
    position: 'absolute',
    top: panelPosition.top,
    left: panelPosition.left,
    width: '150px',
    height: '250px',
    backgroundColor: 'gray'
  })

  return (
    <>
      <button css={sortDownButtonStyle} onMouseDown={handleShowPanel}>
        <img src="/img/icon/sort-down.svg" />
      </button>
      <div css={backgroundStyle} onClick={handleShowPanel}>
        <div css={contextMenuStyle} onClick={handleMenuClick}>
          <button onClick={handleEraser}>Eraser</button>
          <button onClick={handleColorChange} data-color='#ff0000'>red</button>
          <button onClick={handleColorChange} data-color='#00ff00'>green</button>
          <button onClick={handleColorChange} data-color='#000000'>black</button>
          <HexColorInput color={props.drawingConfig.color} onChange={handleColorChange}/>
        </div>
      </div>
    </>
  )
}

const sortDownButtonStyle = css({
  paddingLeft: '3px',
  height: '38px',
  ['img']: {
    width: '8px',
    height: 'auto',
  },
  [':hover']: {
    backgroundColor: 'var(--text-gray)',
  },
})