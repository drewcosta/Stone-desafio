import { FormBlock } from "./card-form-block"
import { RadioBlock } from "./card-radio-block"
import { Button } from './card-button'
import transfer from '../../assets/transfer.svg'

interface Props{
  dolar: number
  typePurchase: "dinheiro" | "cartão"
  setDolar: (value: number) => void
  setTypePurchase: (value: "dinheiro" | "cartão") => void
  onClick: () => void
}

export const CurrencyCardForm = ({ dolar, typePurchase, setDolar, setTypePurchase, onClick}: Props) => {
  return (
    <>
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

      <Button onClick={onClick} selected={!!dolar} imagem={transfer} title='Converter' />
    </>
  )
}

