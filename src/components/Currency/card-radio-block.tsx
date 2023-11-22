import styled from 'styled-components'

interface Props {
  typePurchase: "dinheiro" | "cartao"
  setTypePurchase: (value: "dinheiro" | "cartao") => void
  selected: boolean
}

export const RadioBlock = ({ typePurchase, setTypePurchase }: Props) => {
  return (
    <RadioBlockContainer>
      <FieldSet label="Tipo de compra">
        <FieldText>Tipo de compra</FieldText>

        <FieldInputRadioGroup>
          <FieldRadio onClick={() => setTypePurchase("dinheiro")}>
            <FieldInputRadio
              type="radio"
              id="dinheiro"
              selected={typePurchase === "dinheiro"}
            />
            <FieldRadioLabel htmlFor="dinheiro">Dinheiro</FieldRadioLabel>
          </FieldRadio>

          <FieldRadio onClick={() => setTypePurchase("cartao")}>
            <FieldInputRadio
              type="radio"
              id="cartao"
              selected={typePurchase === "cartao"}
            />
            <FieldRadioLabel htmlFor="cartao">Cartão</FieldRadioLabel>
          </FieldRadio>
        </FieldInputRadioGroup>

      </FieldSet>
    </RadioBlockContainer>
  )
}

const RadioBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: none;
`
const FieldText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const FieldInputRadioGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

const FieldRadio = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;

  &:hover > span::before {
    transform: scale(1);
    background: var(--green);
    opacity: .5;
  }

  &:hover > label {
    color: var(--green);
  }
`

const FieldInputRadio = styled.span<Props>`
  border-radius: 50%;
  border: 1px solid ${props => (props.selected ? 'var(--green)' : 'var(--grey-medium)')};
  line-height: 0;
  padding: 2px;
    
  &::before{
    width: 12px;
    height: 12px;
    content: '';
    display: inline-block;
    transition: all .2s;
    transform: scale(0);
    transform: ${props => (props.selected ? 'scale(1)' : 'scale(0)')};
    border-radius: 50%;
    background: ${props => (props.selected ? 'var(--green)' : '#fff')};
  }  
`

const FieldRadioLabel = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  cursor: pointer;
`

