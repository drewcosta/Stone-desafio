import { stateTax, dinheiroIOF, cartaoIOF } from "./constants"

interface ConversionProps{
  currency: number
  typePurchase: string
  currencyAsk: string
  setState: (value: number | boolean) => void
}

export const handleConversion = ({ currency, typePurchase, currencyAsk, setState }: ConversionProps) => {
  if (currency) {
    if (typePurchase === "dinheiro") {
      setState((currency + (currency * stateTax)) * (Number(currencyAsk) + (currency * dinheiroIOF)));
    }

    if (typePurchase === "cartão") {
      setState((currency + (currency * stateTax) + (currency * cartaoIOF)) * Number(currencyAsk));
    }

    setState(true)
  } else {
    alert("Preencha o valor em dólar e escolha o tipo de compra");
  }
};