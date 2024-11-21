import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    const url = "https://api.sampleapis.com/beers/ale";
    // url api en linea de cervezas
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setBeer(data[0]);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <h2>Cerveza numero...</h2>
      <div className="card">
        <img src={beer.image} alt={beer.name} />
        <p>{beer.id}</p>
        <p>{beer.name}</p>
        <p>{beer.price} </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Beer;
