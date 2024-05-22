import { createContext,useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosContextProvider = ({children}) => {
let autor = 'Fofuro'

    return (
        <UsuariosContext.Provider value={{autor}}>
            {children}
        </UsuariosContext.Provider>
    )
}