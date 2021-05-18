/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react'
import { css } from '@emotion/core'
import { useScreenClass } from 'react-grid-system'
import { useContextMenuContext } from '../../../libs/contexts/contextMenuContext'
import { useLessonEditorContext } from '../../../libs/contexts/lessonEditorContext'
import { ImageViewerProvider } from '../../../libs/contexts/imageViewerContext'
import Loading from './loading'
import ContextMenu from '../../contextMenu'
import ImageViwer from '../../imageViewer'
import Header from './header'
import LessonEditPreview from './preview'
import LessonDurationTime from './durationTime'
import LessonEditGraphicController from './graphicController/'
import Timeline from './timeline'

const LessonEdit = React.forwardRef(function lessonEdit({ lesson }, ref) {
  const screenClass = useScreenClass()
  const { contextMenu, handleDismiss } = useContextMenuContext()
  const { fetchResources, timeline } = useLessonEditorContext()

  const bodyStyle = css({
    margin: 'auto',
    maxWidth: '1280px',
    height: '100%',
    display: 'flex',
    flexDirection: ['xs', 'sm'].includes(screenClass) ? 'column' : 'row',
  })

  const leftSideStyle = css({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 4,
    maxWidth: ['xs', 'sm'].includes(screenClass) ? '100%' : '450px',
    height: 'calc(100% - 80px)',
    marginTop: '40px',
    marginLeft: '10px',
    marginBottom: '40px',
  })

  const rightSideStyle = css({
    flexGrow: 6,
    maxWidth: ['xs', 'sm'].includes(screenClass) ? '100%' : '830px',
    height: 'calc(100% - 80px)',
    marginTop: '40px',
    marginLeft: '100px',
    marginRight: '10px',
    marginBottom: '40px',
  })

  useEffect(() => {
    fetchResources(lesson)
  }, [])

  return (
    <>
      <ContextMenu {...contextMenu} handleDismiss={handleDismiss} />
      <Loading timeline={timeline} />
      <Header currentPage='edit'/>
      <main css={mainStyle} ref={ref}>
        <ImageViewerProvider>
          <ImageViwer />
          <div css={bodyStyle}>
            <div css={leftSideStyle}>
              <LessonEditPreview />
              <LessonDurationTime />
              <LessonEditGraphicController />
            </div>
            <div css={rightSideStyle}>
              <Timeline />
            </div>
          </div>
        </ImageViewerProvider>
      </main>
    </>
  )
})

export default LessonEdit

const mainStyle = css({
  width: '100%',
  height: 'calc(100vh - 77px)', // ヘッダの分を差し引いた画面の高さいっぱいに要素を表示
  backgroundColor: 'var(--bg-light-gray)',
  userSelect: 'none',
})

