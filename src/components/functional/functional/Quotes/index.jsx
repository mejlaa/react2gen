import quotes from "./quotes.json";

const Quotes = (props) => {
  const { number = 1, author = "", length } = props;

  return;
  <div>
    {/* {quotes
        .filter((value, index) => {
          return value.hasOwnProperty("author");
        })
        .map((value) => {
          return (
            <p>
              {quotes.content} by: {quotes.author}
            </p>
          );
        })} */}
    {/* {quotes
        .filter((quote) => {
          return quote.author
            .toLocaleLowerCase()
            .includes(author.toLocaleLowerCase());
        })
        .map((quote) => {
          return (
            <p>
              {quote.content} by: {quote.author}
            </p>
          );
        })} */}
    {/* {quotes
        .filter((quote) => {
          return quote.length < length;
        })
        .map((quote) => {
          return (
            <p>
              {quote.content} by {quote.author}
            </p>
          );
        })} */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {quotes.map((quote) => {
        return (
          <div
            style={{
              width: "200px",
              height: "300",
              margin: "auto",
              border: "1px solid black",
            }}
          >
            <p>Author: {quote.author}</p> <p>Quote: {quote.content}</p>
          </div>
        );
      })}
    </div>
  </div>;
};

export default Quotes;
