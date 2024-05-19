import React from 'react';
import AsideLink from './Link';
import { useAuth } from '../providers/authProvider';

export default function Aside(){
  const { userValue } = useAuth();
  const [user, setUser] = userValue;
  
  return(
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
      
      {/*<!-- Brand Logo -->*/}
      <a href="index3.html" className="brand-link">
        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}}></img>
        <span className="brand-text font-weight-light">C.S.A. Bank</span>
      </a>

      <div className="sidebar">
        {/*<!-- Sidebar user panel (optional) -->*/}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"></img>
          </div>
          <div className="info">
            <a href="#" className="d-block">{user?.email}</a>
          </div>
        </div>
        {/*<!-- Sidebar Menu -->*/}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <AsideLink to="/" icon="nav-icon fas fa-tachometer-alt">Dashboard</AsideLink>
          <AsideLink to="/deposit" icon="nav-icon fas fa-edit">Deposit</AsideLink>
          <AsideLink to="/withdraw" icon="nav-icon fas fa-dollar-sign">Withdraw</AsideLink>  
          <AsideLink to="/create-account" icon="nav-icon fas fa-book">Create Account</AsideLink>
          </ul>
        </nav>


      </div>
      </aside>
    </>
  );
}