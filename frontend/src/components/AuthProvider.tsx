'use client'
import { Auth0Provider } from '@auth0/auth0-react';
type Props = {
    children: string | JSX.Element | JSX.Element[] 
  }
 const AuthProvider =({children}:Props)=>{
    return(
        <Auth0Provider
      domain="dev-38aa32ihcs2hbtoe.us.auth0.com"
      clientId="oozFMxOD7tpeJzxNBSOXZpd9XcNz3NAj"
      authorizationParams={{
        redirect_uri: window.location.origin + '/step'
      }}
    >
        {children}
    </Auth0Provider>
    )
 } 
 export default AuthProvider