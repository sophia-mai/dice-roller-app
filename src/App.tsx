import Die from "./components/ui/Die";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-green-700">
      <h1 className="text-4xl font-bold text-white">Dice Roller</h1>
      <div className="flex gap-6">
        <Die initialValue={4} />
        <Die initialValue={5} />
      </div>
    </div>
  );
}

export default App;
