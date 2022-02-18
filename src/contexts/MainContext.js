import React, { useState } from "react";

export const menuContext = React.createContext();

const MenuContextProvider = ({ children }) => {
  const [meal, setMeal] = useState("");
  return (
    <>
      <menuContext.Provider value={{ meal, setMeal }}>
        {children}
      </menuContext.Provider>
      ;
    </>
  );
};

export default MenuContextProvider;
