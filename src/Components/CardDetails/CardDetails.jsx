import ButtonCard from "../Buttons/ButtonCard/ButtonCard";
import "./CardDetails.css";

const CardDetails = ({
  id,
  title,
  author,
  img,
  desc,
  numperPage,
  ratingCount,
  review,
}) => {
  return (
    <div className="container-details">
      <div className="col-1">
        <img src={img} alt="" />
      </div>
      <div className="col-2">
        <div className="title">
          <h5>{title}</h5>
          <p>{author}</p>
        </div>

        <div className="desc">
          <h3>About Book:</h3>
          <p>{desc}</p>
        </div>

        <div className="button-count">
          <button>-</button>
          <p>{id}</p>
          <button>+</button>
        </div>

        <div className="buttons-add">
          <ButtonCard title="Add to cart" className="btn-card" />
          <ButtonCard title="Favorite" className="btn-card-light" />
        </div>
        <div className="details-page">
          <p>
            Pages Number : <span> {numperPage} page</span>
          </p>
          <p>
            Rating Count : <span>{ratingCount}</span>
          </p>
          <p>
            Reviews: <span>{review}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
