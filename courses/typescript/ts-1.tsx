"use client";

import { useState } from "react";

export const Box = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className="border rounded p-2 m-1">{children}</div>
);

export default function Ts1Course() {
  return (
    <div className="text-sm grid grid-cols-1 sm:grid-cols-2">
      <Les1 />
      <Les2 name="john" />
      <Les3 id={1} name="john" />
      <Les4 id={1} />
      <Les5
        union="str"
        arr={[1, 2, 3]}
        arrObj={[
          { id: 1, name: "john" },
          { id: 2, name: "doe" },
        ]}
        arrUnion={[1, "str"]}
        tupple={["str", 1]}
      />
      <Les6a style={{ border: "1px solid", margin: "10px", padding: "5px", backgroundColor: "gray" }} />
      <Les6b style={{ border: "1px solid", margin: "10px", padding: "5px", backgroundColor: "gray" }} />
      <Les7 style={{ border: "1px solid", margin: "10px", padding: "5px", backgroundColor: "gray" }} />
      <Les8 onClick={() => console.log("hello les 8")} />
      <Les9>children content</Les9>
      <Les10 />
      <Les11 />
      <Les12 type="button" color="red" size="md" />
      <Les13 />
      <Les14 />
    </div>
  );
}

// type User = { name: string; age: number };
function Les14() {
  // const [count, setCount] = useState<number>(0) // tipe (number) tidak perlu ditulis
  // const [text, setText] = useState('teks') // begitupun tipe data primitif lainnya
  // beda ceritanya engan objek;
  // const [data, setData] = useState<User | null>(null);
  // const name = data?.name;

  return (
    <Box>
      Less14: hooks: useState
      {/* <div>name: {name}</div> */}
    </Box>
  );
}

function Les13() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <Box>
      Less13: event handler, tipenya dihover saja <br />
      <input type="text" placeholder="name" onChange={handleChange} className="border rounded" />
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </Box>
  );
}

// intersection & interface
// type tLes12a = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green";
// };
// type tLes12b = tLes12a & {
//   size: "md" | "lg";
// };
interface tLes12a {
  type: "button" | "submit" | "reset";
  color: "red" | "blue" | "green";
}
interface tLes12b extends tLes12a {
  size: "md" | "lg";
}
function Les12({ type, color, size }: tLes12b) {
  return (
    <Box>
      Less12: intersection and interface extend <br />
      type: {type}; color: {color}; size: {size}
    </Box>
  );
}

// artinya semua property button menjadi prop
function Les11({ type, autoFocus, ...rest }: React.ComponentPropsWithoutRef<"button">) {
  return (
    <Box>
      Less11: ComponentPropsWithoutRef & ...rest <br />
      <button type={type} autoFocus={autoFocus} {...rest}>
        Click me
      </button>
    </Box>
  );
}
const Les10 = () => {
  const [count, setCount] = useState(0);
  return (
    <Box>
      Les10: useState, untuk mendapatkan type setCount, hover setCountnya lalu paste untuk tipenya <br />
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        click me {count} times{" "}
      </button>{" "}
      <BtnLes10 setCount={setCount}>click me {count} times</BtnLes10>
    </Box>
  );
};
type tBtnLes10 = { children: React.ReactNode; setCount: React.Dispatch<React.SetStateAction<number>> };
const BtnLes10 = ({ children, setCount }: tBtnLes10) => {
  return (
    <button type="button" onClick={() => setCount((prev) => prev + 1)}>
      {children}
    </button>
  );
};

const Les9 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      Less9: children: React.ReactNode <br />
      children: JSX.Element, children harus jsx element, tidak bisa yang lain <br />
      <button type="button">{children}</button>
    </Box>
  );
};

type tLes8 = {
  //   onClick: () => void;
  onClick(): void;
};
export const Les8 = ({ onClick }: tLes8) => {
  return (
    <Box>
      Less8: onClick void <br />
      <button type="button" onClick={onClick}>
        Click me and see the console
      </button>
    </Box>
  );
};

function Les7({ style }: { style: Record<string, string> }) {
  return (
    <Box>
      Less7: Record
      <div style={style}>style me</div>
    </Box>
  );
}
function Les6b({ style }: { style: React.CSSProperties }) {
  return (
    <Box>
      Less6b: React.CSSProperties
      <div style={style}>style me</div>
    </Box>
  );
}
type tLes6a = { style: { border: string; margin: string; padding: string; backgroundColor: string } };
function Les6a({ style }: tLes6a) {
  return (
    <Box>
      Less6a: object inside object type
      <div style={style}>style me</div>
    </Box>
  );
}

type tLes5 = {
  union: string | number;
  arr: number[];
  arrObj: { id: number; name: string }[];
  arrUnion: (number | string)[];
  tupple: [string, number];
};
function Les5({ union, arr, arrObj, arrUnion, tupple }: tLes5) {
  return (
    <Box>
      Less5: union, array, array union, tupple <br />
      union: {union}; arr: {JSON.stringify(arr)}; arrObj: {JSON.stringify(arrObj)}; arrUnion: {JSON.stringify(arrUnion)}
      ; tupple: {JSON.stringify(tupple)}
    </Box>
  );
}

type tLes4 = { id: number; name?: string };
function Les4({ id, name = "john default" }: tLes4) {
  return (
    <Box>
      Less4: type aliases, optional ( ? ), default value <br />
      id: {id}; name: {name}
    </Box>
  );
}

const Les3 = ({ id, name }: { id: number; name: string }) => (
  <Box>
    Less3: props-2 <br /> id: {id}; name: {name}
  </Box>
);

const Les2 = (props: { name: string }) => (
  <Box>
    Less2: props-1 <br /> name: {props.name}
  </Box>
);
const Les1: React.FC = () => <Box>Less1</Box>;
