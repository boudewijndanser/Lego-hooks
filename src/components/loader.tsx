import { useUserContext } from "../context/useUserContext"
import { useAsync } from "../hooks/useAsync"
import { FetchData } from "./api"
import CircularProgress from '@mui/material/CircularProgress'
import { useEffect } from 'react';



export const Loader = ():JSX.Element => {
    
  const { user, setUser } = useUserContext();
  const { execute, status, value, error } = useAsync<string>(FetchData,false);

    useEffect(()=> {
        if (user.kind === 'readyToConnect') {
            execute()
        }
    },[user])


    return(
        <>
            {
                status === "pending" && 
                <CircularProgress color="success" />
            }
            {
                status === "success" && 
                <div>{value}</div>
            }
            {
                status === "error" && 
                <div>{error}</div>
            }
        </>
    )
}