import styled from 'styled-components'
import { Button } from './card-button'
import arrowLeft from '../../assets/arrow-left.svg'
import { useExchangeRates } from '../../hooks/useExchangeRates'
import { taxPercentage } from '../../utils/filter-percentage'

interface Props {
  typePurchase: "dinheiro" | "cartão"
  total: number
  onClick: () => void
}

export const CurrencyCardResult = ({ onClick, typePurchase, total }: Props) => {
  const { data } = useExchangeRates()

  const dolarExchange = Number(data?.ask).toFixed(2).replace('.', ',')
  const totalExchange = total.toFixed(2).replace('.', ',')
  const percentage = taxPercentage(typePurchase)

  return (
    <CurrencyCardResultContent>
      <Button onClick={onClick} selected imagem={arrowLeft} title='Voltar' />

      <CardResultText>
        <p>O resultado do cálculo é</p>
        <p>R${totalExchange}</p>
      </CardResultText>

      <CardResultResume>
        <CardResultResumeSpan>Compra no {typePurchase} e taxa de {percentage}</CardResultResumeSpan>
        <CardResultResumeSpan>Cotação do dólar: $ 1,00 = R$ {dolarExchange}</CardResultResumeSpan>
      </CardResultResume>
    </CurrencyCardResultContent>
  )
}

const CurrencyCardResultContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 360px;
`

const CardResultText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > p:nth-child(1){
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  & > p:nth-child(2){
    color: var(--green);
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;
  }
`
const CardResultResume = styled.div`
  display: flex;
  flex-direction: column;
`

const CardResultResumeSpan = styled.span`
  color: var(--grey-medium);
`

