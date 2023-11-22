import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { GlobalStyle } from "../src/styles/global";
import { Home } from '../src/components/home';

const queryClient = new QueryClient()

export default function () {
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Home />
      </QueryClientProvider>
    </>
  )
}
