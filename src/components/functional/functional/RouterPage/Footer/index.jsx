import { Link } from 'react-router-dom';
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <Link className={style.footerItemNav} to="/">
          Home
        </Link>
        <Link className={style.footerItemNav} to="/team">
          Team
        </Link>
        <Link className={style.footerItemNav} to="/contacts">
          Contacts
        </Link>
        <Link className={style.footerItemNav} to="/about">
          About
        </Link>
      </div>
      <div className={style.footerItemImg}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Church_of_light.jpg/1920px-Church_of_light.jpg" />
      </div>
    </div>
  );
};

export default Footer;
