import { useUserContext } from "../context/useUserContext"
import { useAsync } from "../hooks/useAsync"
import { FetchData } from "./api"



export const Loader = ():JSX.Element => {
  const { user, setUser } = useUserContext();
  const { execute, status, value, error } = useAsync<string>(FetchData,false);
    return(
        <>
            {
                <p>{user.kind}</p>
            }
        
            {
                status === "pending" && 
                <p>Loading...</p>
            }
            {
                status === "success" && 
                <div>{value}</div>
            }
            {
                status === "error" && 
                <div>{error}</div>
            }
            {
                user.kind == 'readyToConnect' &&
                execute
            }
        </>
    )
}