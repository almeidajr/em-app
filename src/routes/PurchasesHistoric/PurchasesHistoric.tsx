import { QrcodeOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-layout'
import { useBoolean } from 'ahooks'
import { Button } from 'antd'

import { FullPageModal } from '../../components/FullPageModal'
import { NfceList } from '../../components/NfceList'
import { QRCodeReader } from '../../components/QRCodeReader'

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

      <FullPageModal
        destroyOnClose
        onCancel={setFalse}
        onOk={setFalse}
        title="Leitura do cupom fiscal"
        visible={isOpen}
      >
        <QRCodeReader />
      </FullPageModal>
    </PageContainer>
  )
}
