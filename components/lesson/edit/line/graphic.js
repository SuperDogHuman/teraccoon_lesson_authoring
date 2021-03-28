/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/core'
import ContainerSpacer from '../../../containerSpacer'
import Spacer from '../../../spacer'
import LessonEditKindIcon from './kindIcon'
import LessonEditActionLabel from './actionLabel'
import LessonEditGraphicThumbnail from '../graphicThumbnail'
import EditIcon from './editIcon'

export default function LessonLineGraphic({ graphic, lineIndex, kindIndex, isEditButtonShow, handleEditClick }) {
  function handleEditButtonClick(e) {
    e.stopPropagation()
    handleEditClick(e, 'graphic', lineIndex, kindIndex, graphic)
  }

  return (
    <>
      <LessonEditKindIcon kind="graphic" status={graphic.action === 'show'} css={iconStyle} />
      <div css={graphicContainerStyle}>
        {graphic.action === 'show' && <><Spacer height='20'/><LessonEditGraphicThumbnail url={graphic.url} /><Spacer height='20'/></>}
        {graphic.action === 'hide' && <LessonEditActionLabel kind="graphic" action={'hide'} />}
      </div>
      <ContainerSpacer top='20'>
        <EditIcon isShow={isEditButtonShow} onClick={handleEditButtonClick} />
      </ContainerSpacer>
    </>
  )
}

const iconStyle = css({
  display: 'block',
  marginTop: '20px',
})

const graphicContainerStyle = css({
  width: '100%',
})