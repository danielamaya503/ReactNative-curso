import React from 'react'

export const BasicTypes = () => {

    const name: string = 'Alejandro';
    const age:number = 22;
    const isActive:boolean = true;

    const powers: (string | number)[] = ['React Native', 1, "Typescript"];

    return(
        <>
         <h3>Tipos basicos</h3>
         {name} tiene {age} años = {isActive ? 'Activo' : 'Inactivo'}
         <p> {powers.join(', ')}</p>
        </>
    );
}

export default BasicTypes