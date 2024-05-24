import { createContext, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ( ({children}) => {
    let senhorSupremoDoUniverso = 'Rafael'
    let versaoAtual = '3.14'
    const [usuarios, setUsuarios] = useState([
        {
            nome: 'ET Bilu',
            email: 'busquem@conhecimento.com'
        }
    ])

    return (
        <UsuariosContext.Provider value={{usuarios, versaoAtual, senhorSupremoDoUniverso}}>
            {children}
        </UsuariosContext.Provider>
    )
} )

