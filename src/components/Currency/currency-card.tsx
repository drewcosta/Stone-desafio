import styled from 'styled-components'
import { useState } from 'react'

import { CurrencyCardResult } from './currency-card-result'
import { useExchangeRates } from '../../hooks/useExchangeRates'
import { handleConversion } from '../../utils/conversionFn'
import { CurrencyCardForm } from './currency-card-form'

export const CurrencyCard = () => {
  const { data } = useExchangeRates()
  const [dolar, setDolar] = useState<number>()
  const [typePurchase, setTypePurchase] = useState<"dinheiro" | "cartão">("dinheiro")
  const [total, setTotal] = useState<number>(0)
  const [showResult, setShowResult] = useState(false)

  const ConversionProps = {
    currency: dolar,
    currencyAsk: data?.ask,
    typePurchase: typePurchase,
    setResult: setTotal,
    setShowResult: setShowResult
  }

  return (
    <Container>
      {showResult ?
        (
          <CurrencyCardResult
            onClick={() => setShowResult(false)}
            typePurchase={typePurchase}
            total={total}
          />
        ) : (
          <CurrencyCardForm
            dolar={dolar}
            typePurchase={typePurchase}
            setDolar={setDolar}
            setTypePurchase={setTypePurchase}
            onClick={() => handleConversion(ConversionProps)}
          />
        )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 360px;
`

