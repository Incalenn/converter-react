export default function AmountInput({ amount, setAmount, isEuro }) {
    const handleConversion = (e) => {
      setAmount(parseFloat(e.target.value) || 0);
    };
  
    return (
      <div className="flex space-x-2 mb-4">
        <input
          type="number"
          value={amount}
          onChange={handleConversion}
          className="border p-2 rounded"
        />
        <span>{isEuro ? "EUR" : "USD"}</span>
      </div>
    );
  }
  