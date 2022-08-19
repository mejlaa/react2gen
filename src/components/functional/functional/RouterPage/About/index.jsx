import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import style from './about.module.css';

const About = () => {
  const navigation = useNavigate();

  const redirectHome = () => {
    // navigation('/', { replace: true });
    navigation('/', { state: { name: 'mejla' } });
  };
  return (
    <Layout>
      <div className={style.box}>
        <h1 className={style.title}>About</h1>
        <div className={style.content}>
          <img
            className={style.image}
            src="https://www.farmersalmanac.com/wp-content/uploads/2020/11/Aurora-Borealis-When-Viewing-Guide-i488508586.jpeg"
          />

          <p>
            An aurora[a] (plural: auroras or aurorae),[b] also commonly known as
            the polar lights,[c] is a natural light display in Earth's sky,
            predominantly seen in high-latitude regions (around the Arctic and
            Antarctic). Auroras display dynamic patterns of brilliant lights
            that appear as curtains, rays, spirals, or dynamic flickers covering
            the entire sky.[3] Auroras are the result of disturbances in the
            magnetosphere caused by the solar wind. Major disturbances result
            from enhancements in the speed of the solar wind from coronal holes
            and coronal mass ejections. These disturbances alter the
            trajectories of charged particles in the magnetospheric plasma.
            These particles, mainly electrons and protons, precipitate into the
            upper atmosphere (thermosphere/exosphere). The resulting ionization
            and excitation of atmospheric constituents emit light of varying
            colour and complexity. The form of the aurora, occurring within
            bands around both polar regions, is also dependent on the amount of
            acceleration imparted to the precipitating particles.
          </p>
          <p>
            An aurora[a] (plural: auroras or aurorae),[b] also commonly known as
            the polar lights,[c] is a natural light display in Earth's sky,
            predominantly seen in high-latitude regions (around the Arctic and
            Antarctic). Auroras display dynamic patterns of brilliant lights
            that appear as curtains, rays, spirals, or dynamic flickers covering
            the entire sky.[3] Auroras are the result of disturbances in the
            magnetosphere caused by the solar wind. Major disturbances result
            from enhancements in the speed of the solar wind from coronal holes
            and coronal mass ejections. These disturbances alter the
            trajectories of charged particles in the magnetospheric plasma.
            These particles, mainly electrons and protons, precipitate into the
            upper atmosphere (thermosphere/exosphere). The resulting ionization
            and excitation of atmospheric constituents emit light of varying
            colour and complexity. The form of the aurora, occurring within
            bands around both polar regions, is also dependent on the amount of
            acceleration imparted to the precipitating particles.
          </p>
        </div>
        <button onClick={redirectHome}>Do something then go to home</button>
      </div>
    </Layout>
  );
};

export default About;
