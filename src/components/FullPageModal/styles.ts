import styled from '@emotion/styled'
import { Modal } from 'antd'

export const FullPageModal = styled(Modal)`
  height: 100vh;
  width: 100vw;
  margin: auto;
  top: 0;
  border-radius: 0;

  @media (orientation: portrait) {
    top: calc((100vh - 100vw) / 4);
  }

  .ant-modal-body {
    height: calc(100vh - 110px);
    max-height: 100vw;
  }
  .ant-modal-header {
    border-radius: 0;
  }
  .ant-modal-footer {
    border-radius: 0;
  }
  .ant-modal-content {
    border-radius: 0;
  }
`
