import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'

import { Container } from './styles'
import { UserMenu } from './UserMenu'

export const UserAvatar = () => {
  return (
    <Container>
      <Dropdown
        overlay={<UserMenu />}
        placement="bottomLeft"
        trigger={['click']}
      >
        <Avatar icon={<UserOutlined />} shape="square" size="default" />
      </Dropdown>
    </Container>
  )
}
