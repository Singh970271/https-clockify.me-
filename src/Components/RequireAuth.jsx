import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const isAuth  = useSelector(store=>store.authReducer.isAuth)
    const location = useLocation()
    if(!isAuth){
        return <Navigate to="/login" state={{from:location}}/>
    }
  return children
}

export default RequireAuth