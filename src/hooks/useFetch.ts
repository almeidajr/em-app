import { useQuery } from 'react-query'

import { httpClient } from '../utils/httpClient'

interface Nfce {
  id: string
  amount: string
}

export const useNfces = () =>
  useQuery('nfces', async () => {
    const { data } = await httpClient.get<Nfce[]>('/nfces')
    return data.map(({ amount, ...rest }) => ({
      amount: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(amount)),
      ...rest,
    }))
  })
