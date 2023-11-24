import { stateTax, dinheiroIOF, cartaoIOF } from "./constants"

interface ConversionProps{
  currency: number
  typePurchase: string
  currencyAsk: string
  setResult: (value: number) => void
  setShowResult: (value: boolean) => void
}

export const handleConversion = ({ currency, typePurchase, currencyAsk, setResult, setShowResult }: ConversionProps) => {
  if (currency) {
    let result: number;

    if (typePurchase === "dinheiro") {
      result = (currency + (currency * stateTax)) * (Number(currencyAsk) + (currency * dinheiroIOF));
    }

    if (typePurchase === "cartão") {
      result = (currency + (currency * stateTax) + (currency * cartaoIOF)) * Number(currencyAsk);
    }

    setResult(result);
    setShowResult(true)
  } else {
    alert("Preencha o valor em dólar e escolha o tipo de compra");
  }
};