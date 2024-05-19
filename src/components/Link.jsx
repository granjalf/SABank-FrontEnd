import { Link } from 'react-router-dom';
export default function AsideLink({to, icon,children}){
  return(
    <li className="nav-item">
      <a href={to} className="nav-link">
        <i className={icon}></i>
        <p>{children}</p>
      </a>
    </li>
  );
  /*
  return(
    <li className="nav-item">
      <Link to={to} className="nav-link">
        <i className={icon}></i>
        <p>{children}</p>
      </Link>
    </li>
  );
  */
}