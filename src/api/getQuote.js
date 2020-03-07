export const getQuote = async () => {
  try {
    const data = await fetch(
      "https://quote-garden.herokuapp.com/quotes/random"
    );
    const quote = await data.json();
    return quote;
  } catch (e) {
    console.log(e);
  }
};
