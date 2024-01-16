import "./Card.css";
import bookIcon from "../../assets/book-open-01.svg";
import starIcon from "../../assets/bi_star-fill.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonCard from "../Buttons/ButtonCard/ButtonCard";

const Cards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://example-data.draftbit.com/books?_limit=8"
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards">
      {books.map((book) => (
        <div className="card" key={book.id}>
          <div className="img-card">
            <img src={book.image_url} alt="" />
          </div>
          <div className="body-card">
            <h1>{book.authors}</h1>
            <div className="desc">
              <div className="num-page">
                <img src={bookIcon} alt="" />
                <p>{book.num_pages}</p>
              </div>

              <div className="page-rating">
                <img src={starIcon} alt="" />
                <p>{book.rating}</p>
              </div>
            </div>
            <Link to={`/details/${book.id}`}>
              <ButtonCard title="Show Details" className="btn-card" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
