import React from 'react'
import Container from '../../../container'
import ContainerSpacer from '../../../containerSpacer'
import PlainText from '../../../plainText'
import Drawing from '../../drawing'
import PlayerController from '../../player/controller'
import useLessonPlayer from '../../../../libs/hooks/lesson/useLessonPlayer'

export default function DrawingPreview({ drawings, drawing, sameTimeIndex }) {
  const { drawingRef, handleMouseOver, handleMouseLeave, handlePlayButtonClick, isPlayerHover, playerElapsedTime, handleDragStart, handleSeekChange }
    = useLessonPlayer({ startElapsedTime: drawing.elapsedTime, durationSec: drawing.durationSec, drawings, sameTimeIndex })

  return (
    <ContainerSpacer left='10' top='20' bottom='20'>
      <Container width='302' height='170' position='relative'>
        <Container width='302' height='170' position='absolute'>
          <Drawing drawingRef={drawingRef} backgroundColor='lightgray' />
        </Container>
        <Container width='302' height='170' position='absolute'>
          <PlayerController onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onPlayButtonClick={handlePlayButtonClick}
            invisible={!isPlayerHover} playerElapsedTime={playerElapsedTime} maxTime={parseFloat((drawing.durationSec).toFixed(2))}
            onDragStart={handleDragStart} onSeekChange={handleSeekChange} />
        </Container>
      </Container>
      {drawing.units && drawing.units.some(d => d.action === 'draw' && d.durationSec === 0) &&
        <PlainText size='13' color='gray'>収録停止中に描かれた線は、アニメーションなしで表示されます。</PlainText>
      }
    </ContainerSpacer>
  )
}