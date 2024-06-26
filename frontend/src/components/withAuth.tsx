import { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth0 } from "@auth0/auth0-react";

const withAuth = (WrappedComponent:any) => {
  return (props:any) => {
    const Router = useRouter();
    const { isAuthenticated ,user }= useAuth0()
    console.log(isAuthenticated,user,'middleware')
    useEffect(() => {
      if (!isAuthenticated) {
        Router.replace('/login');
      }
    }, [isAuthenticated, Router]);
    return isAuthenticated === true ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;