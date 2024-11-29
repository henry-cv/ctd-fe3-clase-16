import axios from "axios";
import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//Esta pagina renderizará cada bebida de manera individual
import { useParams } from "react-router-dom";

const Beer = () => {
  const [beer, setBeer] = useState([]);
  // estado: beer es para guardar el dato obtenido de la petición
  // a la API, así guarda una cerveza específica buscada por su id

  const params = useParams();
  //console.log(useParams());
  //Es para ver el contenido de la variable indicada en /beer:id de
  //la Route indicada para este componente

  const url = `https://api.sampleapis.com/beers/ale/${params.id}`;
  //url, Este template, es de acuerdo a como buscar por id en la API

  console.log("variable params:")
  console.log(params);
  console.log("variable params.id:")
  console.log(params.id)

  const getBeer = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    // url api en linea de cervezas
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setBeer(data);
  };
  const getBeerAxios = () => {
    axios(url)
      .then((res) => {
        console.log(res);
        setBeer(res.data)
      }).catch(err => console.log(err));
  }
  /* useEffect(() => {
    getBeer();
  }, []); */
  //Para usar la petición por fetch descomentar el useEffect anterior

  useEffect(() => {
    getBeerAxios()
  }, [])
  //Recomienda usar Axios

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
  //Aqui en el return a partir del estado: ${beer} se renderiza los detalles la cerveza buscada por id
};

export default Beer;
