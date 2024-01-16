import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardDetails from "../Components/CardDetails/CardDetails";

const Details = () => {
  const { id } = useParams();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://example-data.draftbit.com/books/${id}`
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching book details: ", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div>
      <NavBar />
      {books ? (
        <CardDetails
          id={books.id}
          img={books.image_url}
          title={books.title}
          author={books.authors}
          desc={books.description}
          numperPage={books.num_pages}
          ratingCount={books.rating_count}
          review={books.review_count}
        />
      ) : (
        <p>Loading book details...</p>
      )}
      <Footer />
    </div>
  );
};

export default Details;
