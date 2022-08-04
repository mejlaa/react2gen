import { useEffect, useState } from 'react';
import { dogApi } from '../../../../api/api';

const RandomDog = () => {
  const [randomDog, setRandomDog] = useState({});

  const fetchRandomDog = async () => {
    try {
      const result = await dogApi.get('/breeds/image/random');
      const data = result.data;
      console.log(data);
      setRandomDog(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <div
      style={{
        width: 450,
        height: 450,
        margin: 'auto',
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <button onClick={() => fetchRandomDog()}>Random dog</button>
      <img
        src={randomDog.message}
        alt=""
        style={{ maxHeight: 450, maxWidth: 450 }}
      />
    </div>
  );
};

export default RandomDog;
