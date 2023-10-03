"use client";

import { createContext, useState } from "react";

export const UniContext = createContext({
  uni: "",
  setUni: () => {}
});

export default function CountProvider(children) {
  const [count, setCount] = useState(0);
  return (
    <UniContext.Provider value={{ uni, setUni }}>
      {children}
    </UniContext.Provider>
  );
}