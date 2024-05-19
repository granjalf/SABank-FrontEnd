import React from 'react'

import Aside from '../components/aside';
import NavBar from '../components/navbar';
import { useAuth } from '../providers/authProvider';

export default function MainLayout({children}){
  const { tokenValue, userValue } = useAuth();
  const [token, setToken] = tokenValue;
  return(
    <>
    { token ? (
      <div className="wrapper">
        <NavBar />
        <Aside />
        <div className="content-wrapper">
          {children}
        </div>
      </div>  
    ):(
        <div className="login-page" style={{minHeight:'466px'}}>
          <div className="login-box">
            <div className="card card-outline card-primary">
              <div className="card-header text-center">
                <h1><b>S.A.</b> Bank</h1>
              </div>
              <div className="card-body">
                {children}    
              </div>
            </div>
          </div>
        </div>
    )}
    </>   
  );
}