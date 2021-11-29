import { useQuery } from 'react-query'

import { fmt } from '../utils/fmt'
import { httpClient } from '../utils/httpClient'

interface Nfce {
  id: string
  amount: string
  emissionDate: string
}

export const useNfces = () =>
  useQuery('nfces', async () => {
    const { data } = await httpClient.get<Nfce[]>('/nfces')

    return data
      .map(({ amount, emissionDate, ...rest }) => ({
        amount: fmt.currency(amount),
        emissionDate: fmt.date(emissionDate),
        ...rest,
      }))
      .sort(
        (a, b) =>
          new Date(b.emissionDate).getTime() -
          new Date(a.emissionDate).getTime(),
      )
  })
