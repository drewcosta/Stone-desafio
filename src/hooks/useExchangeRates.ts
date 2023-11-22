import axios from 'axios'
import { useQuery } from 'react-query'
import { ExchangeRate } from '../types/exchange-rates'

const URL = "https://economia.awesomeapi.com.br"

const fetcher = async () => {
  const response = await axios.get(`${URL}/last/USD-BRL`)
  return response.data.USDBRL
}


export function useExchangeRates() {
  const { data, isLoading } = useQuery<ExchangeRate>({
    queryKey: ['USDBRL'],
    queryFn: fetcher,
  })

  console.log(data)

  return { data, isLoading }
}
