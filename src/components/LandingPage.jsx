import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { positionMap, colorMap, backgroundMap } from "../utils/maps";
import { getQuote } from "../api/getQuote";

function Home(props) {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    setIsLoadingImage(true);
    setImageUrl(`https://picsum.photos/900/600.jpg?random=${Math.random()}`);
  }, [props.photo]);

  const {
    textColor,
    textPosition,
    background,
    quote,
    showAuthor
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const position = positionMap.get(textPosition);
  const color = colorMap.get(textColor);
  const backgroundColor = backgroundMap.get(background);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const quote = await getQuote();
        dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: quote });
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuote();
  }, []);

  return (
    <section className="meme" id="quote">
      {imageUrl && (
        <>
          <img
            key={props.photo.photo}
            className="meme-image"
            src={imageUrl}
            alt="random photo from Unsplash"
            onLoad={() => setIsLoadingImage(false)}
            width="900"
          />

          <div
            className="quote-block"
            style={{ ...position, color, backgroundColor }}
          >
            <h3>{quote.quoteText}</h3>
            {showAuthor && quote.quoteAuthor && <h3>- {quote.quoteAuthor}</h3>}
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
