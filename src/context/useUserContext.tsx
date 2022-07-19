import { useContext } from 'react'
import { UserContext } from './userContext'

export const useUserContext = () => {
  return useContext(UserContext)
}