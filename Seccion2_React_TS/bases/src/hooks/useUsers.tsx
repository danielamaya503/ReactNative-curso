import { useEffect, useRef, useState } from "react";
import { loadUserAction } from "../action/load-users-action";
import type { User } from "../interfaces/reqres.response";

export const useUsers = () => {

    //State para almacenar la lista de usuarios obtenida de la API de Reqres.
    const [users, setUsers] = useState<User[]>([]);
    //Referencia para almacenar la página actual de la lista de usuarios. 
    // Se utiliza useRef para mantener el valor entre renderizados 
    // sin causar re-renderizados adicionales.
    const currentPageRef = useRef(1);

    // useEffect hook para cargar la lista de usuarios cuando el componente 
    // se monta.
    useEffect(() => {

      loadUserAction(1).then(setUsers);

    }, [])

    const nextPage = async () => {

      currentPageRef.current++;
      
      const users = await loadUserAction(currentPageRef.current);

      if(users.length > 0){
        setUsers(users);
      }else {
        currentPageRef.current--;
      }

    }

    const prevPage = async () => {
        
        if(currentPageRef.current < 1){
            return;
        }

        currentPageRef.current--;

        const users = await loadUserAction(currentPageRef.current);
        setUsers(users);
    }
    

  return {
    users,

    nextPage,
    prevPage,
  }
    
  
}
