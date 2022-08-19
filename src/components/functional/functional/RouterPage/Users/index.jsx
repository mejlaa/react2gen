import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const Users = () => {
  const arrayUsers = [
    { id: 1, name: 'Mejla', job: 'developer' },
    { id: 2, name: 'Mejla2', job: 'developer' },
    { id: 3, name: 'Mejla3', job: 'developer' },
    { id: 4, name: 'Mejla4', job: 'developer' },
  ];

  const navigation = useNavigate();

  const navigateToUser = user => {
    // navigation('/user', {state.name});
  };
  return (
    <Layout>
      {arrayUsers.map(item => {
        return (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Job: {item.job}</p>
            <button onClick={() => navigateToUser(item)}> See more</button>
          </div>
        );
      })}
    </Layout>
  );
};

export default Users;
