import React, { useState } from "react";
import Message from "./Message";

const Form = ({ selected }) => {
  console.log(selected);
  console.log("form copy");
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });
  const [flag, setFlag] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
  };
  const handleEmail = (e) => {
    setCustomer({ ...customer, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" onChange={handleName} />
        <label>Email: </label>
        <input type="email" onChange={handleEmail} />
        <button>Comprar entrada de {selected.artista}</button>
      </form>
      {flag ? <Message name={customer.name} email={customer.email} /> : null}
    </div>
  );
};

export default Form;
