"use client";

import { useState } from "react";

type tPerson = { id: number; name: string };
export default function Ts2() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState<tPerson | null>(null);
  const [person2, setPerson2] = useState<tPerson>({} as tPerson);

  const handlePerson = () => {
    setPerson({ id: 1, name: "john" });
  };

  const handlePerson2 = () => {
    setPerson2({ id: 2, name: "doe" });
  };

  return (
    <div>
      Ts2
      <div className="border rounded p-2 m-2">
        TsUseState
        <div>count: {count}</div>
        <div>
          count:
          <button type="button" onClick={() => setCount((p) => p + 1)} className="underline px-2">
            plus
          </button>
          <button type="button" onClick={() => setCount((p) => p - 1)} className="underline px-2">
            minus
          </button>
        </div>
        <div>
          person id: {person?.id}; person name: {person?.name}
          <button onClick={handlePerson} type="button" className="underline px-2">
            set person
          </button>
        </div>
        <div>
          person2 id: {person2?.id}; person2 name: {person2.name}
          <button onClick={handlePerson2} type="button" className="underline px-2">
            set person2
          </button>
        </div>
      </div>
    </div>
  );
}
