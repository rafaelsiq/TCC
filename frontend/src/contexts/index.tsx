import React from "react";
import { UserContextProvider } from "./user/index";
import { RouterContextProvider } from "./routers/index";
import { MenuContextProvider } from "./menu/index";
import { AdContextProvider } from "./advertisement";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <MenuContextProvider>
        <RouterContextProvider>
        <AdContextProvider>
          <div id='background'
            style={{
              backgroundImage: `url("https://raw.githubusercontent.com/rafaelsiq/TCC/main/frontend/src/constants/files/geral-background.png")`,
  //              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              width: '100%',
              height: '100%',

            }}>
            <UserContextProvider>{children}</UserContextProvider>;

          </div>
          </AdContextProvider>
        </RouterContextProvider>;
      </MenuContextProvider>;
    </>
  );
};

export default GlobalContext;