import "../../Card.css"; // We'll style the card in a separate CSS file
type CardProps = {
  title: string;
  description: string;
  image: string;
};
const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
