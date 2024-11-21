import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>{data.tagline}</p>
      <img src={data.image} alt={data.name} />
    </div>
  );
};

export default Card;
