import style from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to="/">Home</Link>
      <Link to="/team">Team</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
