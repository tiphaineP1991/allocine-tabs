import React from "react";

const Item = props => {
  const url = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
  return (
    <li>
      <img className="poster" src={url + props.image}></img>
      <div className="details">
        <h2 className="title">{props.title}</h2>
        <h3 className="date">{props.date}</h3>
        <h4 className="description">{props.overview}</h4>
      </div>
    </li>
  );
};

export default Item;
