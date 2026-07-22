import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const {isChecking, isAuthenticated, LoginEmailPassword, Logout, user} = useAuthContext();

    if(isChecking){
        return (
            <h3 className="text-2xl">Checking authentication...</h3>
        )
    }

    return (
    <>
        {
            isAuthenticated ? (
                <>
                <h3 className="text-2xl">Authenticated</h3>
                <pre className="bg-blue-900 text-white p-3 rounded-md mt-3">
                    {JSON.stringify(user, null, 2)}
                </pre>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md" 
                    onClick={() => Logout()}
                >
                    Logout
                </button>
                </>
            ) :
            (
                <>
                <h3 className="text-2xl">Not Authenticated</h3>
                <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md"
                    onClick={ () => LoginEmailPassword('user@example.com', 'password')}
                >
                    Login
                </button>
                </>
            )
        }
        
    </>
    );

}
