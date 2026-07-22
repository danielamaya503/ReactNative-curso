import React from 'react'

interface Persona{
    age: number,
    name: string,
    lastName: string,
    address: Address,
}

interface Address{
    country: string,
    houseNO: string
    street?: string
}

export const ObjectLiteral = () => {

    const persona: Persona = {
        age: 22,
        name: 'Alejandro',
        lastName: 'Amaya',
        address: {
            country: 'El Salvador',
            houseNO: "503",
        }
    };

  return (
    <>  
        <h3>Object Literal</h3>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre> 
        
    </>

  )
}
