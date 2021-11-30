import ProLayout from '@ant-design/pro-layout'
import { BackTop } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { paths } from '../../routes/paths'
import { UserAvatar } from '../UserAvatar'
import { route } from './route'
import { Container } from './styles'

export const Layout = () => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  return (
    <Container id="layout-container">
      <ProLayout
        fixSiderbar
        headerRender={isAuthenticated ? undefined : false}
        hide={!isAuthenticated}
        location={location}
        menuItemRender={(item, dom) => (
          <Link to={item.path ?? paths.purchasesHistoric}>{dom}</Link>
        )}
        pageTitleRender={() => 'EasyMarket'}
        rightContentRender={UserAvatar}
        route={route}
        title="EasyMarket"
      >
        <Outlet />
        <BackTop />
      </ProLayout>
    </Container>
  )
}
