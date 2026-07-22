//React Hook Forms 
// https://react-hook-form.com/es/get-started#ReactHookForm
//Sirve para manejar formularios de manera más sencilla y
//  eficiente en React. Proporciona una forma de registrar y 
// validar los campos del formulario, manejar el estado del formulario y 
// enviar los datos de manera más fácil. Además, es muy ligero y rápido, 
// lo que lo hace ideal para aplicaciones con formularios complejos.

import { useForm } from "react-hook-form";

//Definimos una interfaz para los datos del formulario
type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {

  //es una función que devuelve un objeto con varias propiedades y 
  // métodos que se pueden utilizar para manejar el formulario.
  //useForm es un hook que se utiliza para inicializar el formulario y manejar su estado.
  const {
    //register, //es una función que se utiliza para registrar los campos del formulario.
    register,
    //es una función que se utiliza para manejar el envío del formulario.
    handleSubmit, 
    //es una función que se utiliza para observar los cambios en los campos del formulario.
    // => watch, 
  } = useForm<FormInputs>({
    //defaultValues es un objeto que define los valores iniciales de los campos del formulario.
    defaultValues: {
      email: "Daniel@gmail.com",
      password: "123",
    },
  });

  //onSubmit es una función que se ejecuta cuando se envía el formulario.
  //FormInputs es el tipo de datos que se espera recibir en el formulario.
  const onSubmit = (data: FormInputs) => {
    console.log(data);
  }

  //observa los cambios en el campo email
  //=> console.log(watch("email")); 

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formulario</h3>
      <div className="flex flex-col space-y-2 w-125">
        <input 
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2"
          // Registra el campo email con validación requerida
          {...register('email', { required: true })}
        />
        <input 
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2"
          // Registra el campo password con validación requerida
          {...register("password", { required: true })}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Ingresar
        </button>

      </div>
    </form>
    </>
  )
    
  
}
