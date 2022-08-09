import "./twitterCard.css";

const TwitterCard = (props) => {
  const { url, title, about, btnUrl } = props;

  return (
    <div className="card">
      <img src={url} />
      <p className="title">{title}</p>
      <p>{about}</p>
      <button>
        <a href="{btnUrl}">READ MORE</a>
      </button>
    </div>
  );
};

export default TwitterCard;
