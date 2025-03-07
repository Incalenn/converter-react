export default function ExchangeRate({ rate }) {
    return <div className="mb-4">Taux de change actuel: {rate.toFixed(4)}</div>;
  }
  