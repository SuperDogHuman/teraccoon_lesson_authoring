import { useState, useEffect } from 'react'
import { useErrorDialogContext } from '../contexts/errorDialogContext'

export default function useAudioInputDevices() {
  const [devices, setDevices] = useState([])
  const { showError } = useErrorDialogContext()

  function requestMicPermission() {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    }).then(async() => {
      const allDevices = await navigator.mediaDevices.enumerateDevices()
      setDevices(allDevices.filter(d => d.kind === 'audioinput'))
    }).catch(e => {
      showError({
        message: 'マイクの検出に失敗しました。マイクの接続を確認してください。',
        original: e,
        canDismiss: true,
        callback: requestMicPermission,
      })
      console.error(e)
    })
  }

  useEffect(() => {
    requestMicPermission()
  }, [])

  return { devices, requestMicPermission }
}