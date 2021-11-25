import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { paths } from '../paths'
import { Container } from './styles'

const { Paragraph, Text, Title } = Typography

export const NotFound = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Container>
      <Title>404</Title>
      <Title level={2}>Página não encontrada</Title>
      <Paragraph>
        <Text type="secondary">
          A página que você está procurando não existe
        </Text>
      </Paragraph>
      <Link to={isAuthenticated ? paths.purchasesHistoric : paths.signIn}>
        <Button type="primary">Voltar para a página inicial</Button>
      </Link>
    </Container>
  )
}
