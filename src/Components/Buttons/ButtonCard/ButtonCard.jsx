import "./ButtonCard.css";

// eslint-disable-next-line react/prop-types
const ButtonCard = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};

export default ButtonCard;
