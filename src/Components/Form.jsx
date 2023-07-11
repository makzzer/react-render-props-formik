//la idea es que este formulario pueda recibir independiente del formulario que nosotros creemos
//informacion y la puedra procesar

import { useState } from "react";

const Form = ({ children, initialState,onSubmitDesdeApp }) => {
  //estado inicial testing

  const [values, setValues] = useState(initialState);

  //tengo que crear un onChange dinamico
  //puedo linkear un campo name con su respectivo value
  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;

    //utilizando el callback
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitDesdeApp(values);
  };

  return children({ values, handleOnChange, handleSubmit }); //todas las funciones que quiero que tengan alcance en el componente principal las tengo que poner como parametro del children
};

export default Form;
