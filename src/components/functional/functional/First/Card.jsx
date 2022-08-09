import "./card.css";

const Card = (props) => {
  const { url, name, job } = props;

  return (
    <div className="card">
      <img src={url} alt="nesto" />
      <p className="title">{name}</p>
      <p>{job}</p>
    </div>
  );
};

export default Card;
