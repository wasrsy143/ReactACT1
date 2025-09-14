import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right text-xl p-3 border rounded-lg mb-2"
          />
          <div className="text-right text-lg text-gray-600">{result}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 bg-red-400 text-white p-3 rounded-lg">C</button>
          <button onClick={handleDelete} className="bg-yellow-400 text-white p-3 rounded-lg">DEL</button>
          <button onClick={() => handleClick("/")} className="bg-gray-300 p-3 rounded-lg">÷</button>

          <button onClick={() => handleClick("7")} className="bg-gray-200 p-3 rounded-lg">7</button>
          <button onClick={() => handleClick("8")} className="bg-gray-200 p-3 rounded-lg">8</button>
          <button onClick={() => handleClick("9")} className="bg-gray-200 p-3 rounded-lg">9</button>
          <button onClick={() => handleClick("*")} className="bg-gray-300 p-3 rounded-lg">×</button>

          <button onClick={() => handleClick("4")} className="bg-gray-200 p-3 rounded-lg">4</button>
          <button onClick={() => handleClick("5")} className="bg-gray-200 p-3 rounded-lg">5</button>
          <button onClick={() => handleClick("6")} className="bg-gray-200 p-3 rounded-lg">6</button>
          <button onClick={() => handleClick("-")} className="bg-gray-300 p-3 rounded-lg">−</button>

          <button onClick={() => handleClick("1")} className="bg-gray-200 p-3 rounded-lg">1</button>
          <button onClick={() => handleClick("2")} className="bg-gray-200 p-3 rounded-lg">2</button>
          <button onClick={() => handleClick("3")} className="bg-gray-200 p-3 rounded-lg">3</button>
          <button onClick={() => handleClick("+")} className="bg-gray-300 p-3 rounded-lg">+</button>

          <button onClick={() => handleClick("0")} className="col-span-2 bg-gray-200 p-3 rounded-lg">0</button>
          <button onClick={() => handleClick(".")} className="bg-gray-200 p-3 rounded-lg">.</button>
          <button onClick={handleCalculate} className="bg-green-400 text-white p-3 rounded-lg">=</button>
        </div>
      </div>
    </div>
  );
}
