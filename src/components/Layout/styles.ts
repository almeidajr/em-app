import styled from '@emotion/styled'
import { Typography } from 'antd'

const { Text } = Typography

export const Container = styled.div`
  height: 100vh;
`
export const Version = styled(Text)`
  display: block;
  width: 100%;
  color: #fff;

  code {
    display: block;
    width: 100%;
    border-radius: 0;
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }
`
