/* eslint-disable react/prop-types */
/**
 * PASSO A PASSO PARA CRIAR UM CONTEXTO
 * 
 * 1 - [X] - CRIE O ARQUIVO DO CONTEXTO NA PASTA CONTEXT
 * 2 - [x] - IMPORTAR O createContext DO REACT (ele serve para criar o contexto)
 * 3 - [x] - CRIAR O CONTEXTO USANDO A FUNÇÃO createContext
 * 4 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
 * 
 * 5 - [x] - CRIE O PROVIDER
 * 6 - [x] - DEFINA OS DADOS GLOBAIS
 * 7 - [x] - CRIE O RETURN DO PROVIDER PASSANDO OS DADOS GLOBAIS DENTRO
 * DA PROPS 'VALUE'
 * 8 - [x] - EXPORTE O PROVIDER
 */

import {createContext, useState} from "react"

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
  // DADOS GLOBAIS
  const senhorSupremoDoUniverso = 'Rafael'
  const [usuarios, setUsuarios] = useState([
    {
      nome: "ET Bilu",
      email: "busquem@conhecimento.com"
    },
    {
      nome: "Mano Juca",
      email: "mj-vidaloka@email.com"
    },
    {
      nome: "Gill Bates",
      email: "gill@sicromoft.com"
    }
  ])

  return (
    // aqui é o nome do contexto
    <UsuariosContext.Provider value={{usuarios, setUsuarios, senhorSupremoDoUniverso}}>
      {/* // aqui dentro */}
      {children}
    </UsuariosContext.Provider>
  )
}
 