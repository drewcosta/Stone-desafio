import styled from 'styled-components'
import { FormBlock } from "./card-form-block"
import { RadioBlock } from "./card-radio-block"
import { Button } from './card-button'
import { useExchangeRates } from '../../hooks/useExchangeRates'
import transfer from '../../assets/transfer.svg'
import { useState } from 'react'

export const CurrencyCard = () => {
  const { data } = useExchangeRates()

  const [dolar, setDolar] = useState<number>()
  const [typePurchase, setTypePurchase] = useState<"dinheiro" | "cartao">("dinheiro")

  console.log(typePurchase)
  console.log(dolar)

  return (
    <Container>

      <FormBlock
        dolar={dolar}
        setDolar={setDolar}
        typePurchase={typePurchase}
      />

      <RadioBlock
        typePurchase={typePurchase}
        setTypePurchase={setTypePurchase}
        selected={!!typePurchase}
      />

      <Button selected={!!dolar} imagem={transfer} title='Converter' />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 360px;
`

