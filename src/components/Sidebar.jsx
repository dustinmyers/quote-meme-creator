import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getQuote } from "../api/getQuote";
import logo from "../assets/fox.png";

export default function Sidebar(props) {
  const { textColor, textPosition, background } = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchQuote = async () => {
    try {
      const quote = await getQuote();
      dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: quote });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="sidebar">
      <div className="editor-section">
        <h4 className="editor-header">Text Color</h4>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_COLOR", payload: "light" })
          }
        >
          Light{" "}
          {textColor === "light" && <FontAwesomeIcon icon={faCheckCircle} />}
        </p>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_COLOR", payload: "dark" })
          }
        >
          Dark{" "}
          {textColor === "dark" && <FontAwesomeIcon icon={faCheckCircle} />}
        </p>
      </div>
      <div className="editor-section">
        <h4 className="editor-header">Text Position</h4>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_POSITION", payload: "top" })
          }
        >
          Top{" "}
          {textPosition === "top" && <FontAwesomeIcon icon={faCheckCircle} />}
        </p>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_POSITION", payload: "center" })
          }
        >
          Center{" "}
          {textPosition === "center" && (
            <FontAwesomeIcon icon={faCheckCircle} />
          )}
        </p>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_POSITION", payload: "bottom" })
          }
        >
          Bottom{" "}
          {textPosition === "bottom" && (
            <FontAwesomeIcon icon={faCheckCircle} />
          )}
        </p>
      </div>
      <div className="editor-section">
        <h4 className="editor-header">Background</h4>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_BACKGROUND", payload: "light" })
          }
        >
          Light{" "}
          {background === "light" && <FontAwesomeIcon icon={faCheckCircle} />}
        </p>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_BACKGROUND", payload: "dark" })
          }
        >
          Dark{" "}
          {background === "dark" && <FontAwesomeIcon icon={faCheckCircle} />}
        </p>
        <p
          onClick={() =>
            dispatch({ type: "CHANGE_BACKGROUND", payload: "none" })
          }
        >
          None{" "}
          {background === "none" && <FontAwesomeIcon icon={faCheckCircle} />}
        </p>
      </div>
      <button onClick={fetchQuote}>New Quote</button>
      <button onClick={() => props.setPhoto({ photo: props.photo.photo + 1 })}>
        New Photo
      </button>
      <div className="flex-spacer" />
      <img className="logo" src={logo} width="40" alt="fox logo" />
    </div>
  );
}
