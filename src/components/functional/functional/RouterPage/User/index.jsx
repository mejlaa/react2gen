import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const User = () => {
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    const redirectToUsers = () => {
      navigation('/users');
    };
    if (location.state === null) {
      redirectToUsers();
    }
  }, []);

  <Layout>
    {location.state && (
      <div>
        <p>{location.name}</p>
      </div>
    )}
  </Layout>;
};

export default User;
