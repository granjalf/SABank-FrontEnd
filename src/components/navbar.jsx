export default function NavBar(){
    return(
        <>
  {/*<!-- Navbar -->*/}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/*<!-- Left navbar links -->*/}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Contact</a>
      </li>
    </ul>

    {/*<!-- Right navbar links -->*/}
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
    </>
    );
}

