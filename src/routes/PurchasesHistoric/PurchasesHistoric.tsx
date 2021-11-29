import { QrcodeOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-layout'
import { useBoolean } from 'ahooks'
import { Button } from 'antd'

import { NfceList } from '../../components/NfceList'
import { QRCodeReader } from '../../components/QRCodeReader'
import { SquaredContentModal } from '../../components/SquaredContentModal'

export const PurchasesHistoric = () => {
  const [isOpen, { setTrue, setFalse }] = useBoolean(false)

  return (
    <PageContainer
      extra={
        <Button icon={<QrcodeOutlined />} onClick={setTrue} type="primary">
          Ler QR Code
        </Button>
      }
    >
      <NfceList />

      <SquaredContentModal
        destroyOnClose
        onCancel={setFalse}
        onOk={setFalse}
        title="QR Code"
        visible={isOpen}
      >
        <QRCodeReader />
      </SquaredContentModal>
    </PageContainer>
  )
}
