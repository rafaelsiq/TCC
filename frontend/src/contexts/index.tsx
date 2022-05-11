import React from "react";
import { UserContextProvider } from "./user/index";
import { RouterContextProvider } from "./routers/index";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
     <RouterContextProvider>
      <UserContextProvider>{children}</UserContextProvider>;
     </RouterContextProvider>;
    </>
  );
};

export default GlobalContext;