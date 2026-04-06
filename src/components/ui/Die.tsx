const dotPositions: Record<number, number[]> = {
  1: [4],
  2: [2, 6],
  3: [2, 4, 6],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

function Die() {
  const value = 5;
  const dots = dotPositions[value] ?? [];

  return (
    <button
      className="grid grid-cols-3 grid-rows-3 gap-2 rounded-xl bg-white p-4 shadow-lg"
      style={{ width: "120px", height: "120px" }}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="flex items-center justify-center">
          {dots.includes(i) && (
            <div className="h-5 w-5 rounded-full bg-gray-800" />
          )}
        </div>
      ))}
    </button>
  );
}

export default Die;
