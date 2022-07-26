import style from './hero.module.css';

const Hero = props => {
  return (
    <div className={style.kostur}>
      <div className={style.bla}>
        <h2>Before they sold out readymade gluten</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className={style.btn}>
          <button className={style.btn1}>Button</button>
          <button className={style.btn2}>Button</button>
        </div>
      </div>
      <div className={style.slika}>
        <img src="https://flyclipart.com/thumb2/png-logo-design-transparent-logo-design-images-489321.png" />
      </div>
    </div>
  );
};

export default Hero;
