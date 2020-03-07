const initialState = {
  background: "none",
  quote: "",
  textColor: "light",
  textPosition: "top"
};

export const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTE_SUCCESS":
      return {
        ...state,
        quote: action.payload
      };
    case "CHANGE_TEXT_COLOR":
      return {
        ...state,
        textColor: action.payload
      };
    case "CHANGE_TEXT_POSITION":
      return {
        ...state,
        textPosition: action.payload
      };
    case "CHANGE_BACKGROUND":
      return {
        ...state,
        background: action.payload
      };
    default:
      return state;
  }
};
