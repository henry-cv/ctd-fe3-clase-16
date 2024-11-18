import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const res = await fetch("https://coffee.alexflipnote.dev");

    console.log(res);
    const data = await res.json();
    console.log(`data: ${data}`);
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  });

  return (
    <div className="grid">
      {beers.length ? beers.map((beer) => <Card data={beer} />) : null}
    </div>
  );
};

export default Home;
