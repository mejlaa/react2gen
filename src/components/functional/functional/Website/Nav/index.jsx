import style from './nav.module.css';

const Nav = props => {
  return (
    <div className={style.kostur}>
      <div className={style.logo}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />
      </div>
      <div className={style.menu}>
        <a>First</a>
        <a>Second</a>
        <a>Third</a>
        <a>Fourth</a>
      </div>
    </div>
  );
};

export default Nav;
