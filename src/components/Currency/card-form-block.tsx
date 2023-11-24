import styled from 'styled-components'
import { taxPercentage } from '../../utils/filter-percentage'

interface Props {
  dolar: number
  setDolar: (value: number) => void
  typePurchase: "dinheiro" | "cartão"
}

export const FormBlock = ({ dolar, setDolar, typePurchase }: Props) => {

  return (
    <FormBlockContainer>
      <Field label="Dólar">
        <FieldText>Dólar</FieldText>
        <FieldInputText
          type="number"
          placeholder="$1,00"
          value={dolar}
          onChange={(e) => setDolar(Number(e.target.value))}
        />
      </Field>
      <Field label="Taxa do Estado">
        <FieldText>Taxa do Estado</FieldText>
        <FieldInputText
          type="text"
          placeholder="0%"
          value={taxPercentage(typePurchase)}
          disabled
        />
      </Field>
    </FormBlockContainer>
  )
}

const FormBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`
const FieldText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const FieldInputText = styled.input`
  width: 168px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid rgba(13, 17, 27, 0.08);
  box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
`

