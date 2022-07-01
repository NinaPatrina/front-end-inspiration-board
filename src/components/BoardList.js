import React from "react";
import "./BoardList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BoardList = (props) => {
  return (
    <div>
      <div>You have these spaces:</div>
      <ul className="list">
        {props.boards.map((item) => (
          <li key={item.id} className="list-item">
            <Link to={`${item.id}`} style={{ cursor: "pointer" }}>
              {item.title}
            </Link>
            <button onClick={() => props.deleteBoard(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
