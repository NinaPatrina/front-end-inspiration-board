import React from "react";
import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ data, deleteCardCallBack, setLikesCountCallBack }) => {
  const cardComponents = data.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      message={card.message}
      color={card.color}
      likesCount={card.likes_count}
      setLikesCountCallBack={setLikesCountCallBack}
      deleteCardCallBack={deleteCardCallBack}
    />
  ));

  return <div>{cardComponents}</div>;
};

CardList.propTypes = {
  cardListData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      data: PropTypes.array.isRequired,
      setLikesCountCallBack: PropTypes.func.isRequired,
      deleteCardCallBack: PropTypes.func.isRequired,
    })
  ),
};

export default CardList;
