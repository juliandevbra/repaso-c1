import React, { useState } from "react";
import Message from "./Message";

const Form = ({ selected }) => {
  console.log(selected);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Email: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <button>Comprar entrada de {selected.artista}</button>
      </form>
      {flag ? <Message name={name} email={email} /> : null}
    </div>
  );
};

export default Form;
