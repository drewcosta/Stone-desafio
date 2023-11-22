import styled from 'styled-components'
import { useExchangeRates } from '../../hooks/useExchangeRates'
import { formatDateTime } from '../../utils/format-day'

export const HeaderDataTime = () => {
  const { data } = useExchangeRates()

  const dateUTC = formatDateTime(new Date(data?.create_date))

  return (
    <Container>
      <SpanDataTime>{dateUTC}</SpanDataTime>
      <SpanDataTimeText>Dados de câmbio disponibilizados pela Morningstar</SpanDataTimeText>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SpanDataTime = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: normal;
`

const SpanDataTimeText = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: var(--grey-medium);
`
