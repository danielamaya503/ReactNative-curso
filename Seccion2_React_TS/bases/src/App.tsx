//import BasicTypes from './typescript/BasicTypes'
//import { BasicFuctions } from './typescript/BasicFuctions'
//import { ObjectLiteral } from './typescript/ObjectLiteral'
//import { Counter } from "./components/Counter"
//import { LoginPage } from "./components/LoginPage"
//import { UsersPage } from "./components/usersPage"
import { FormsPage } from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"


function App() {

  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">Vite + React</h1>

        {/*PROPS <BasicTypes /> */}
        {/* <ObjectLiteral /> */}
        {/*<BasicFuctions />*/}
        {/*<Counter />*/}
        {/*<LoginPage />*/}
        {/*<UsersPage />*/}
        <FormsPage />
      </div>
    </AuthProvider>
    
  )
}

export default App
