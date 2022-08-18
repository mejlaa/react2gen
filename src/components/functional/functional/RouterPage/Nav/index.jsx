import style from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={style.nav}>
      <img
        className={style.logo}
        src="https://media.istockphoto.com/vectors/aurora-borealis-in-north-norway-mountains-in-the-background-vector-vector-id1170110869?b=1&k=20&m=1170110869&s=612x612&w=0&h=fa53bPrNXqbkw7D-G2bZ9IN4DeWcP7_bpl2oo10RDi8="
      />
      <div>
        <Link className={style.navItem} to="/">
          Home
        </Link>
        <Link className={style.navItem} to="/team">
          Team
        </Link>
        <Link className={style.navItem} to="/contacts">
          Contacts
        </Link>
        <Link className={style.navItem} to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Nav;
