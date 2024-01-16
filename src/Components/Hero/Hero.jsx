import "./Hero.css";
import book from "../../assets/book.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="col-1">
        <button className="btn-1">Author of august</button>
        <h1>Eric-Emanuel Schmitt </h1>
        <p>
          Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes
          and distinctions, and in 2001 he received the title of Chevalier des
          Arts et des Lettres. His books have been translated into over 40
          languages.
        </p>

        <button className="btn-2">View his boooks</button>
      </div>
      <div className="col-2">
        <img src={book} alt="" />
      </div>
    </div>
  );
};

export default Hero;
