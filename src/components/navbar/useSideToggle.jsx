import React, { createContext, useState } from "react";

const SideNavContext = createContext({});
// const ToggleContext = createContext();

function UseSideToggle({ children }) {
  // toggle for cart
  const [show, setShow] = useState(false);
  return (
    <SideNavContext.Provider value={{ show, setShow }}>
      <div>{children}</div>
    </SideNavContext.Provider>
  );
}

export { UseSideToggle, SideNavContext };
