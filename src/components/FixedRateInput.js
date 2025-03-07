export default function FixedRateInput({ setFixedRate }) {
    const handleFixedRate = (e) => {
      const value = parseFloat(e.target.value);
      setFixedRate(isNaN(value) ? null : value);
    };
  
    return (
      <div className="mt-4">
        <input
          type="number"
          placeholder="Fixer un taux"
          onChange={handleFixedRate}
          className="border p-2 rounded"
        />
      </div>
    );
  }
  