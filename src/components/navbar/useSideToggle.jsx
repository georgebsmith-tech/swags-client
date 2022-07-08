import React, { createContext, useContext, useState } from "react";

const SideNavContext = createContext();
const ToggleContext = createContext();

function UseSideToggle({ children }) {
  // toggle for cart
  const [show, setShow] = useState(false);
  return (
    <SideNavContext.Provider value={show}>
      <ToggleContext.Provider value={setShow}>
        <div>{children}</div>
      </ToggleContext.Provider>
    </SideNavContext.Provider>
  );
}

export { UseSideToggle, SideNavContext, ToggleContext };
