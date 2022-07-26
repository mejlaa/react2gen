import Hero from './Hero';
import Layout from './Layout';

const Website = props => {
  console.log(window.location);

  const url = window.location.pathname;
  console.log(url);

  return (
    <div>
      <Layout>
        <button
          onClick={() => {
            window.location.pathname = '/';
          }}
        >
          HOme
        </button>
        {/* stranice */}
        {url && url.includes('/') && <Hero />}
        {url && url.includes('contacts') && <p>Contacts</p>}
        {url && url.includes('price') && <p>Price</p>}
        {url && url.includes('shop') && <p>shop</p>}
        {url && url.includes('about') && <p>about</p>}
        <Hero />
      </Layout>
    </div>
  );
};

export default Website;
