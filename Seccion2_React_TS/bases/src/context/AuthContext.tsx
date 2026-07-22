
//Proveer informacion de forma global a toda la aplicacion
//ContextAPI: Permite compartir informacion entre componentes sin necesidad 
//de pasar props manualmente en cada nivel del arbol de componentes
//const { hola } = useAuthContext();
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

enum AuthStatus{
    'Checking' = 'Checking',
    'Authenticated' = 'Authenticated',
    'NotAuthenticated' = 'NotAuthenticated'
}

interface User
{
    name: string;
    email: string;
    password: string;
}

interface AuthState{
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;

    //Metodos Interfaz
    LoginEmailPassword: (email: string, password: string) => void;
    Logout: () => void;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}: PropsWithChildren) => {
    
    const [status, setStatus] = useState(AuthStatus.Checking);
    const [user, setUser] = useState<User>();

    useEffect(() => {

      setTimeout( () => {
        setStatus(AuthStatus.NotAuthenticated)
      }, 2500)
      
    }, [])

    const LoginEmailPassword = (email: string, password: string) => {
        
        setUser({
            name: 'Juan',
            email: email,
            password: password
        });

        setStatus(AuthStatus.Authenticated);

    }

    const Logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.NotAuthenticated);
    }
    
    return (
        <AuthContext.Provider 
            value={{
                status: status,
                user: user,

                //Getter
                isChecking: status === AuthStatus.Checking,
                isAuthenticated: status === AuthStatus.Authenticated,

                //Metodo
                LoginEmailPassword: LoginEmailPassword,
                Logout: Logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}
