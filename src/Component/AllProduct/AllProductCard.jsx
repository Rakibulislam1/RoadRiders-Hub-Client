import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

/* eslint-disable react/prop-types */
const AllProductCard = ({ product }) => {
  const { _id, name, photo, brand, type, price, description, rating } = product;

  return (
    <div className="my-10">
      <div className="bg-base-100 shadow-xl rounded-lg">
        <figure>
          <img
            className="h-[280px] w-full rounded-t-lg"
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
            description.length > 150 ? <p>{description.slice(0, 120)}</p> : <p>{description}</p>
          }
          
          <small>Ratings: {rating}</small>
          

          <div className="flex justify-center gap-5 my-3">
            <Link to={`/productDetails/${_id}`}>
              {" "}
              <button className="btn btn-sm text-white border-none hover:bg-[#264da0] bg-[#11285A]">Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-sm text-white border-none hover:bg-[#264da0] bg-[#11285A]">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
