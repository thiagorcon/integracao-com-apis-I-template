import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const User = styled.div`
  border: black 1px solid;
  margin-top: 8px;
  width: 350px;
  padding: 8px;
`
function Usuario(props) {
  // foi desestruturado pois nao estava atulaizando automaticamente, pois esta como props. Para corigir foi declarada como uma variavel na linha abaixo já que não usamos o setUsuarios
  //const [usuario, setUsuario] = useState(props.usuario);
  const {usuario} = props
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  function pegarEmail(id) {
    axios
    .get(`https://labenusers.onrender.com/labenusers/users/${id}`,{headers :{
        Authorization : "thiago-rosa-labenu"
      }
    })
    .then(response =>{
      console.log(response.data.email);
      setEmail(response.data.email)      
    })
    .catch(error =>{
      console.log(error);
    })
  }

  useEffect(() => {
    pegarEmail(usuario.id)
},[])

  return (
    <User>
      {editar ? (
        <div>
          <p>Nome: {usuario.name}</p>
          <p>E-mail: {usuario.email}</p>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={()=>props.editarUsuarios(usuario.id, nome , email)}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p><strong>Nome:</strong> {usuario.name}</p>
          {/* como a requisicao - estado linha 14 - foi  feita aqui dentro na linha de baixo só chamamos e-mail na linha 50 */}
          <p><strong>E-mail:</strong> {email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={()=> props.excluirUsuarios(usuario.id)}>Excluir</button>
    </User>
  );
}

export default Usuario;
