import {  useLoaderData } from "react-router-dom";


const ProductDetails = () => {


  const product = useLoaderData()
  const { name, photo, brand, type, price, description, rating,  } = product;

  return (
    <div className="flex justify-center my-10">
      <div className="bg-blue-100 shadow-xl rounded-lg w-4/12">
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
          <p>Description: {description}</p>
          <small>Ratings: {rating}</small>
          <div className="flex my-3">
            <button className="btn btn-info">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;