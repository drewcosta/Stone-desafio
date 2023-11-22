import styled from 'styled-components'
import { FormBlock } from "./card-form-block"
import { RadioBlock } from "./card-radio-block"
import { Button } from './card-button'
import { useExchangeRates } from '../../hooks/useExchangeRates'
import arrowLeft from '../../assets/arrow-left.svg'
import { useState } from 'react'

export const CurrencyCardResult = () => {

  return (
    <Container>
      <Button imagem={arrowLeft} title='Voltar' />

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 360px;
`

