import { useState, useEffect } from "react";
import ExchangeRate from "./components/ExchangeRate";
import AmountInput from "./components/AmountInput";
import FixedRateInput from "./components/FixedRateInput";
import SwitchButton from "./components/SwitchButton";
import "./index.css";

export default function CurrencyConverter() {
  const [rate, setRate] = useState(1.1);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(amount * rate);
  const [isEuro, setIsEuro] = useState(true);
  const [fixedRate, setFixedRate] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRate((prevRate) => {
        const newRate = prevRate + (Math.random() * 0.1 - 0.05);
        return parseFloat(newRate.toFixed(4));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentRate = fixedRate !== null ? fixedRate : rate;
    const newConverted = isEuro ? amount * currentRate : amount / currentRate;
    setConvertedAmount(parseFloat(newConverted.toFixed(4)));
  }, [amount, rate, isEuro, fixedRate]);

  return (
    <div className="app-container">
      <h1>Convertisseur EUR/USD</h1>
      <AmountInput amount={amount} setAmount={setAmount} isEuro={isEuro} />
      <ExchangeRate rate={rate} />
      <div className="conversion-result">
        {convertedAmount} {isEuro ? "USD" : "EUR"}
      </div>
      <SwitchButton isEuro={isEuro} setIsEuro={setIsEuro} setAmount={setAmount} convertedAmount={convertedAmount} />
      <FixedRateInput setFixedRate={setFixedRate} />
    </div>
  );
}
