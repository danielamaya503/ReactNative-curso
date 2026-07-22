import { useUsers } from "../hooks/useUsers"
import { UserRow } from "./userRow"

export const UsersPage = () => {

    //Request con AXIOS (npm i axios)
    //https://reqres.in/api/users?page=2
    //free_user_3GdgnbJnAzUnpcSsjyn9wwKGR1G

    const {users, nextPage, prevPage} = useUsers();
    console.info(`users`, users);

  return (
    <>
      <h1 className="text-2xl">Users Page</h1>

      <table className="w-125 table-auto border-collapse border border-slate-400 mt-3">
        
        <thead>
          <tr>
            <th className="border border-slate-300 px-4 py-2">Avatar</th>
            <th className="border border-slate-300 px-4 py-2">Name</th>
            <th className="border border-slate-300 px-4 py-2">Email</th>
          </tr>
        </thead>

        <tbody>
            {
                users.map(user => (
                    <UserRow key={user.id} user={user} />
                ))
            }

        </tbody>

      </table>

      <div className="flex justify-between w-125 mt-3">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
         onClick={prevPage}
         >
          Anteriores
        </button>

        <button 
            className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-md"
            onClick={nextPage}
         >
          Siguientes
        </button>
      </div>
    </>
  )
}
