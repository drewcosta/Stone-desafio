import { useMemo } from "react";

export const taxPercentage = (type: string) => {
  return useMemo(() => {
    if (type === "dinheiro") return "1,1%";
    if (type === "cartão") return "6,4%";
    return "0%";
  }, [type]);
};