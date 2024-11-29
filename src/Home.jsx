import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const url = "https://api.sampleapis.com/beers/ale";
  const getBeers = async () => {
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(`DATA`);
    console.log(data.slice(10, 14));
    setBeers(data.slice(10, 14));
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="grid">
      {beers.length ? beers.map((beer) => <Card data={beer} key={beer.id} />) : null}
    </div>
  );
};

export default Home;
