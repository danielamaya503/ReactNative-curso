import axios from "axios"
import type { UserListResponse } from "../interfaces/reqres.response"

//Forma de realizar peticiones HTTP con AXIOS, para obtener la lista de usuarios de la API de Reqres.
export const loadUserAction = async(pages: number) => {

    try
    {
        //forma de llamar a la API de Reqres para obtener la lista de usuarios, pasando el número de página como parámetro en la URL.
        const { data } = await axios.get<UserListResponse>(
        `https://reqres.in/api/users?page=${pages}`,
        {
            headers: {
            "x-api-key": "free_user_3GdgnbJnAzUnpcSsjyn9wwKGR1G",
            "Content-Type": "application/json",
            },
        }
        );        
        return data.data;
    }
    catch(error)
    {
        console.info(`error`, error);
        return [];
    }

}