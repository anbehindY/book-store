import { Link, Outlet } from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <div className="logo">
      <h1>Bookstore CMS</h1>
    </div>
    <nav className="navBar">
      <Link to="/">BOOK</Link>
      <Link to="categories">Category</Link>
    </nav>
    <div className="profile" />
    <Outlet />
  </header>
);

export default Navigation;
