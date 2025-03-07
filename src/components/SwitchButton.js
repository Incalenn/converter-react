export default function SwitchButton({ isEuro, setIsEuro, setAmount, convertedAmount }) {
    const handleSwitch = () => {
      setIsEuro(!isEuro);
      setAmount(convertedAmount);
    };
  
    return (
      <button onClick={handleSwitch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Switch en {isEuro ? "USD" : "EUR"}
      </button>
    );
  }
  