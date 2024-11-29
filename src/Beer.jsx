import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//Esta pagina renderizará cada bebida de manera individual
import { useParams } from "react-router-dom";

const Beer = () => {
  const [beer, setBeer] = useState([]);
  //console.log(useParams());
  //Es para ver el contenido de la variable indicada en /beer:id de
  //la Route indicada para este componente
  const params = useParams();
  console.log("variable params:")
  console.log(params);
  console.log("variable params.id:")
  console.log(params.id)

  const getBeer = async () => {

    //Deberas completar este fetch con el parametro correspondiente
    const url = `https://api.sampleapis.com/beers/ale/${params.id}`;
    // url api en linea de cervezas
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setBeer(data);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <h2>Cerveza numero: {beer.id}</h2>
      <div className="card">
        <img src={beer.image} alt={beer.name} />
        <p>{beer.name}</p>
        <p>{beer.price} </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Beer;
