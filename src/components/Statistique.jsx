import { useState } from "react";

export default function Statistique({ stat, value, unit }) {
  const [statValue, setStatValue] = useState(value);

  return (
    <div className="flex justify-between">
      <p className="font-semibold">{stat} :</p>
      <div className="flex gap-1 items-center">
        <button onClick={() => setStatValue(statValue + 5)}>🔼</button>
        <p>
          {statValue} {unit}
        </p>
        <button onClick={() => setStatValue(statValue - 5)}>🔽</button>
      </div>
    </div>
  );
}
