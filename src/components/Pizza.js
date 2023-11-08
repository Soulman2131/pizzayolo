import React from "react";

function Pizza({ pizza }) {
  return (
    <>
      <li
        className={`pizza__item ${
          pizza.soldOut ? "pizza__soldout" : "pizza__span"
        } `}
      >
        <img src={pizza.photoName} alt="pizza" className="pizza__img" />
        <div className="pizza__text">
          <h3 className="heading-tertiary"> {pizza.name} </h3>
          <p className="pizza__paragraph"> {pizza.ingredients} </p>
          {pizza.soldOut ? (
            <span className="pizza__paragraph">En rupture</span>
          ) : (
            <span>{pizza.price}&euro; </span>
          )}
        </div>
      </li>
    </>
  );
}

export default Pizza;
