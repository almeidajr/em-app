import { message } from 'antd'
import { useCallback } from 'react'
import QrReader from 'react-qr-reader'

interface QRCodeReaderProps {
  onSuccess?: (data: string) => void
}

export const QRCodeReader = ({ onSuccess }: QRCodeReaderProps) => {
  const onScan = useCallback(
    (data: string | null) => {
      if (data) {
        onSuccess?.(data)
        message.success(`QR Code: ${data}`)
      }
    },
    [onSuccess],
  )

  return (
    <QrReader
      delay={1000}
      onError={(err) => console.log(err)}
      onLoad={() => console.log('qr ready')}
      onScan={onScan}
    />
  )
}
