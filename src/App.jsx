import Form from "./Components/Form";
import { useState } from "react";

function App() {
  //este estado inicial puede tener un objeto con distintos parametros

  //este onSubmitDesdeApp lo creo para poder acceder a los values que están dentro del componente hijo Form
  const onSubmitDesdeApp = (values) =>{
    console.log(values)

  }
  

  return (
    <>
      <div>
        {/*a este componente Form le puedo pasar un children que va a ser el form, la idea es que el estado del input esté controlado dentro del componente*/}
        {/*y al input le puedo decir que el value es igual a la propiedad text del objeto values que inicializo en el useState*/}

        <Form
          //desde el form le voy a mandar el initialState al componente
          initialState={{ text: "desdeApp", email:"makzofx@gmail.com" }}
          onSubmitDesdeApp={onSubmitDesdeApp}
        >
          {({ values, handleOnChange,handleSubmit}) => (
            <form onSubmit={handleSubmit}> 
              <input
                type="email"
                placeholder="email"
                value={values.email}
                onChange={handleOnChange}
                name="email" //respetar el mismo nombre de la propiedad del objeto en useState de Form
              />

              <input
                type="text"
                placeholder="text"
                value={values.text}
                onChange={handleOnChange}
                name="text" //respetar el mismo nombre de la propiedad del objeto en useState de Form
              />

              <button type="submit">submit</button>
            </form>
          )}
        </Form>
      </div>
    </>
  );
}

export default App;
