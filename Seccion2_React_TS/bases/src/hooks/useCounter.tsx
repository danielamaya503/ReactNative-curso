import { useState } from "react";

export const useCounter = () => {

    //counter es el inicializador del estado
    //setCounter es la funcion que actualiza el estado
    //useState es un hook que permite crear un estado en un componente

    const [count, setCount] = useState<number>(1);
    
    const incrementar = (value: number) => {
        //setCount(count + value);
        //setCount( (current) => current +1);
        setCount( Math.max(value + count, 0) );
    }

    const decrementar = (value: number) => {
        setCount( Math.max(count - value, 0) );
    }


    return {
        //Propiedades
        count, 
        //Acciones
        incrementar,
        decrementar
    }

}
