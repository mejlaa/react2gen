import { queryByTestId } from '@testing-library/react';
import { useState, useEffect } from 'react';
import api from '../../../../api/api';
import QuoteCard from './QuoteCard';

const GetQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const result = await api.get(`/quotes`);
      const data = result.data;
      setQuotes(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      {quotes.map((quote, index) => {
        return (
          <QuoteCard
            author={quote.author}
            content={quote.content}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default GetQuotes;
