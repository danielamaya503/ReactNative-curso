import type { User } from "../interfaces/reqres.response"

interface UserRowProps {
  user: User;
}

//Componente que representa una fila de usuario en la tabla de usuarios. 
// Recibe un objeto de tipo User como prop y muestra su avatar, 
// nombre y correo electrónico en una fila de la tabla.
export const UserRow = ({ user }: UserRowProps) => {

  return (
    <>
        <tr>
            <td className="border border-slate-300 px-4 py-2">
                <img 
                 src={user.avatar}
                 alt="Avatar" 
                 className="rounded-full w-14 p-2"  
                 />   
            </td>
            <td className="border border-slate-300 px-4 py-2">
                {user.first_name} {user.last_name}
            </td>
            <td className="border border-slate-300 px-4 py-2">
                {user.email}
            </td>
        </tr>
    </>
  )
}
