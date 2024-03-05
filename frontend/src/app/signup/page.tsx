'use client'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from '@/components/admin/Login';
import { useEffect } from 'react';

const Signup = () => {
  const domain = 'dev-38aa32ihcs2hbtoe.us.auth0.com';
  const clientId = 'ag0WcjIJBVVIC0AHJef3oF6C6ddDlvSC';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <LoginButton />
    </Auth0Provider>
  );
}

export default Signup;
