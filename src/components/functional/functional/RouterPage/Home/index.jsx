import { useLocation } from 'react-router-dom';
import About from '../About';
import Contacts from '../Contacts';
import Layout from '../Layout';
import Team from '../Team';

const Home = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Layout>
      <p>Home</p>
      {location.state && <p>{location.state.name}</p>}
    </Layout>
  );
};

export default Home;
