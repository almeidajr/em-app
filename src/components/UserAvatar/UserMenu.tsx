import { LogoutOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

import { useAuth } from '../../hooks/useAuth'

export const UserMenu = () => {
  const { signOut } = useAuth()

  return (
    <Menu theme="dark">
      <Menu.Item icon={<LogoutOutlined />} key={1} onClick={signOut}>
        Sair
      </Menu.Item>
    </Menu>
  )
}
