import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllProductCard = ({ product }) => {
  const {_id, name, photo, brand, type, price, description, rating,  } = product;


  return (
    <div className="my-10">
      <div className="bg-blue-100 shadow-xl rounded-lg">
        <figure>
          <img className="h-[200px] w-full rounded-t-lg"
            src={photo}
            alt={photo}
          />
        </figure>
        <div className="p-5">
          <h2 className="card-title normal-case">Name: {name}</h2>
          <h2 className="text-lg font-semibold">Brand Name: {brand}</h2>
          <h2 className="text-lg font-semibold">Type: {type}</h2>
          <h2 className="text-lg font-semibold">Price: {price}</h2>
          {
            description.length > 150 ? <p><span className="text-lg font-semibold">Description:</span> {description.slice(0,100)}</p> : <p>{description}</p>
          }
          <small>Ratings: {rating}</small>
          <div className="flex justify-center gap-5 my-3">
            <Link to={`/productDetails/${_id}`}> <button className="btn btn-sm btn-success">Details</button></Link>
            <Link to={`/updateProduct/${_id}`}><button className="btn btn-sm btn-error">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
