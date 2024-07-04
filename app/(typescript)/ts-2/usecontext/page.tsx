"use client";

import React, { createContext, useContext, useState } from "react";

type User = { id: number; name: string };
type UserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const DataContext = createContext<UserContext | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ id: 1, name: "john" });
  return <DataContext.Provider value={{ user, setUser }}>{children}</DataContext.Provider>;
};

const Data = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("Data must be used");
  }
  const { user, setUser } = context;

  const plusId = () => {
    setUser((prev) => ({ ...prev, id: prev.id + 1 }));
  };

  const changeToDoe = () => {
    setUser((prev) => ({ ...prev, name: "doe" }));
  };
  return (
    <div className="border orunded p-2 m-2">
      Page
      <div>
        user id: {user?.id}; user name: {user?.name}
        <div className="*:underline flex gap-2">
          <button type="button" onClick={plusId}>
            Plus Id
          </button>
          <button type="button" onClick={changeToDoe}>
            Chate to Doe
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <DataProvider>
      <Data />
    </DataProvider>
  );
}
