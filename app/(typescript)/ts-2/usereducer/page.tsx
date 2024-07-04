"use client";

import { useReducer } from "react";

type State = { id: number; name: string };
type Action =
  | { type: "plus" }
  | { type: "minus" }
  | { type: "setName"; name: string }
  | { type: "plusamount"; amount: number };

const reducer = (state: State, action: Action) => {
  if (action.type === "plus") {
    return { ...state, id: state.id + 1 };
  } else if (action.type === "minus") {
    return { ...state, id: state.id - 1 };
  } else if (action.type === "setName") {
    return { ...state, name: action.name };
  } else if (action.type === "plusamount") {
    return { ...state, id: state.id + action.amount };
  } else {
    return state;
  }
};
const initialState = { id: 1, name: "john" };
export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePlus = () => {
    dispatch({ type: "plus" });
  };
  const handleMinus = () => {
    dispatch({ type: "minus" });
  };
  const handlePlusAmount = () => {
    dispatch({ type: "plusamount", amount: 10 });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setName", name: e.target.value });
  };
  return (
    <div className="border p-2 m-2 rounded">
      useReducer
      <div>
        id: {state.id}; name: {state.name}
        <div>
          <button type="button" onClick={handlePlus} className="underline mx-2">
            plus
          </button>
          <button type="button" onClick={handleMinus} className="underline mx-2">
            minus
          </button>
          <button type="button" onClick={handlePlusAmount} className="underline mx-2">
            plus10
          </button>
        </div>
        <div>
          <input type="text" value={state.name} onChange={handleChange} className="border" placeholder="name" />
        </div>
      </div>
    </div>
  );
}
