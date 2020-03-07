import React, { useState, useEffect } from "react";

function Home() {
  const [photo, setPhoto] = useState();
  const [quote, setQuote] = useState();

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const data = await fetch("https://picsum.photos/id/237/200/300");
        const photo = await data.json();
        console.log(photo);
        setPhoto(photo);
      } catch (e) {
        console.log(e);
      }
    };

    const getQuote = async () => {
      try {
        const data = await fetch(
          "https://quote-garden.herokuapp.com/quotes/random"
        );
        const quote = await data.json();
        console.log(quote);
        setQuote(quote);
      } catch (e) {
        console.log(e);
      }
    };
    getPhoto();
    getQuote();
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default Home;
