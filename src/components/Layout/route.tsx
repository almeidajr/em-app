import { HistoryOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import { paths } from '../../routes/paths'

export const route = {
  routes: [
    {
      path: paths.purchasesHistoric,
      name: 'Histórico de compras',
      icon: <HistoryOutlined />,
    },
    {
      path: paths.shoppingLists,
      name: 'Listas de compras',
      icon: <ShoppingCartOutlined />,
    },
  ],
}
