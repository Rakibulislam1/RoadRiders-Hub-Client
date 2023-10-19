import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id: id,
    name,
    photo,
    brand,
    type,
    price,
    description,
    rating,
  } = product;

  console.log("======", product);

  const handleClick = () => {
    const myCart = localStorage.getItem("my-cart");
    if (!myCart) {
      localStorage.setItem("my-cart", JSON.stringify([]));
    }

    if (myCart) {
      const myCart = JSON.parse(localStorage.getItem("my-cart"));
      const car = {
        id,
        name,
        brand,
        price,
      };

      const cars = myCart.find((item) => item.id === car.id);

      if (cars) {
        console.log("Already added");
      } else localStorage.setItem("my-cart", JSON.stringify([...myCart, car]));
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="bg-blue-100 shadow-xl rounded-lg w-4/12">
        <figure>
          <img
            className="h-[200px] w-full rounded-t-lg"
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
            <button className="btn btn-info" onClick={handleClick}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
