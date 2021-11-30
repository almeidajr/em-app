import { FileSearchOutlined, HistoryOutlined } from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-layout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

import { paths } from '../paths'

const { Item } = Breadcrumb

export const PurchasesDetails = () => {
  return (
    <PageContainer
      breadcrumbRender={() => (
        <Breadcrumb>
          <Item>
            <HistoryOutlined />
            <Link to={paths.purchasesHistoric}>Histórico de compras</Link>
          </Item>
          <Item>
            <FileSearchOutlined />
            <span>Detalhes da compra</span>
          </Item>
        </Breadcrumb>
      )}
    >
      **Exibição detalhada**
    </PageContainer>
  )
}
