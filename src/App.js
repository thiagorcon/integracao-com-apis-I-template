import React, { useState } from "react";

const usuariosLocal = [
  {
    id: 1,
    name: "Muri"
  },
  {
    id: 2,
    name: "Paulinha"
  },
  {
    id: 1,
    name: "Marcelo"
  },
  {
    id: 1,
    name: "Rodrigo"
  },
]
function App() {
  const [usuarios, setUsuarios] = useState(usuariosLocal)
  return (
    <>
      <p>Para esta aula usaremos a <a href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro" target="_blank" rel="noreferrer">API Labenusers</a></p>
      {usuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>
      })}
    </>
  )
}

export default App;
