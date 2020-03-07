import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { positionMap, colorMap, backgroundMap } from "../utils/maps";
import { getQuote } from "../api/getQuote";

function Home(props) {
  const [photoUrl, setPhotoUrl] = useState("https://picsum.photos/900/600.jpg");
  useEffect(() => {
    setPhotoUrl("");
  }, [props.photo]);
  useEffect(() => {
    if (!photoUrl) {
      setPhotoUrl("https://picsum.photos/900/600.jpg");
    }
  }, [photoUrl]);

  const { textColor, textPosition, background, quote } = useSelector(
    state => state
  );
  const position = positionMap.get(textPosition);
  const color = colorMap.get(textColor);
  const backgroundColor = backgroundMap.get(background);
  const dispatch = useDispatch();
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
    <section className="meme">
      {photoUrl && (
        <img
          key={props.photo}
          className="meme-image"
          src={photoUrl}
          alt="random photo from Unsplash"
          width="900"
        />
      )}
      {photoUrl && (
        <div
          className="quote-block"
          style={{ bottom: position, color, backgroundColor }}
        >
          <h3>{quote.quoteText}</h3>
          {quote.quoteAuthor && <h3>- {quote.quoteAuthor}</h3>}
        </div>
      )}
    </section>
  );
}

export default Home;
