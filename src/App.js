import React, { useEffect, useState } from "react";
import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";
import axios from "axios";

const usuariosLocal = [
  {
    id: 1,
    name: "Muri",
  },
  {
    id: 2,
    name: "Paulinha",
  },
  {
    id: 3,
    name: "Marcelo",
  },
  {
    id: 4,
    name: "Rodrigo",
  },
];

function App() {
  const [usuarios, setUsuarios] = useState([]);

  function pegarUsuarios() {
    axios
      .get("https://labenusers.onrender.com/labenusers/users", {
        headers: {
          Authorization: "thiago-rosa-labenu",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    pegarUsuarios();
  }, []);

  function cadastrarUsuario(name, email) {
    const body = {
      name: name,
      email: email,
    };
    axios
      .post("https://labenusers.onrender.com/labenusers/users", body, {
        headers: {
          Authorization: "thiago-rosa-labenu",
        },
      })
      .then(response => {
        console.log(response);
        pegarUsuarios();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function editarUsuarios(id, name, email) {
    const body = {
      name,
      email
    }

    axios
      .put(`https://labenusers.onrender.com/labenusers/users/${id}`, body ,{
        headers: {
          Authorization: "thiago-rosa-labenu"
        }
      })
      .then((response) => {
        console.log(response.request);
        pegarUsuarios()
      })
      .catch(((error) => {
        console.log(error);
      }))
  }

  function excluirUsuarios(id) {
    axios
      .delete(`https://labenusers.onrender.com/labenusers/users/${id}`, {
        headers: {
          Authorization: "thiago-rosa-labenu",
        }
      })
      .then(response => {
        console.log(response);
        pegarUsuarios()
      })
      .catch(error => {
        console.log(error);
      })

  }


  return (
    <>
      <p>
        Para esta aula usaremos a{" "}
        <a
          href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro"
          target="_blank"
          rel="noreferrer"
        >
          API Labenusers
        </a>
      </p>
      <AddUsuario cadastrarUsuario={cadastrarUsuario} />
      <hr />
      {usuarios.map((usuario) => {
        return <Usuario key={usuario.id} usuario={usuario} editarUsuarios={editarUsuarios} excluirUsuarios={excluirUsuarios} />;
      })}
    </>
  );
}

export default App;
