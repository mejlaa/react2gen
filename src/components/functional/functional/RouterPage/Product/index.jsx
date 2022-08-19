import { useParams } from 'react-router-dom';
import Layout from '../Layout';

const Product = () => {
  const params = useParams();

  const productArray = [
    { name: 'chocolate', id: 1 },
    { name: 'banana', id: 2 },
    { name: 'orange', id: 3 },
    { name: 'watermelon', id: 4 },
  ];

  return (
    <Layout>
      <p>Product</p>
    </Layout>
  );
};

export default Product;
