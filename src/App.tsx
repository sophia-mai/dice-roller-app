import { useState } from "react";
import Die from "./components/ui/Die";

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  const [die1, setDie1] = useState(3);
  const [die2, setDie2] = useState(5);

  const total = die1 + die2;

  function rollBoth() {
    setDie1(rollDie());
    setDie2(rollDie());
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-green-700">
      <h1 className="text-4xl font-bold text-white">Dice Roller</h1>

      <div className="flex gap-6">
        <Die value={die1} onRoll={() => setDie1(rollDie())} />
        <Die value={die2} onRoll={() => setDie2(rollDie())} />
      </div>

      <button
        onClick={rollBoth}
        className="rounded-lg bg-yellow-400 px-6 py-3 text-lg font-semibold text-gray-800 shadow-md transition-colors hover:bg-yellow-300"
      >
        Roll Both
      </button>

      <p className="text-2xl font-semibold text-white">Total: {total}</p>
    </div>
  );
}

export default App;
