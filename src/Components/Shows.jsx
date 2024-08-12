import { useState } from "react";
import { espectaculos } from "../espectaculos";
import Card from "./Card";
import Form from "./Form copy";

const Shows = () => {
  const [selected, setSelected] = useState(null);
  //   console.log("valor de selected", selected);
  return (
    <div>
      {selected ? <Form selected={selected} /> : null}
      {espectaculos.map((espectaculo) => (
        <Card key={espectaculo.id} {...espectaculo} setSelected={setSelected} />
      ))}
    </div>
  );
};

export default Shows;
