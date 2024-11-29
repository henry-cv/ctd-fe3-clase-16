import { Link } from 'react-router-dom';
const Card = ({ data }) => {
  console.log("card data");
  console.log(data);
  return (
    <div className="card">
      <Link to={`/beer/${data.id}`} >
        <h3>{data.name}</h3>
        <img src={data.image} alt={data.name} />
      </Link >

    </div >
  );
};

export default Card;
