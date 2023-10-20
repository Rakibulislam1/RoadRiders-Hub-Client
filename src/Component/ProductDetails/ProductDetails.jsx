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
      
      <div className="card card-side bg-base-100 h-1/2 shadow-xl max-w-7xl mx-auto">
        <figure>
          <img src={photo} alt={photo} />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-semibold">Name: {name}</h2>
          <h2 className="text-lg font-semibold">Brand Name: {brand}</h2>
          <h2 className="text-lg font-semibold">Type: {type}</h2>
          <h2 className="text-lg font-semibold">Price: {price}</h2>
          <p className="text-lg">Description: {description}</p>
          <small>Ratings: {rating}</small>
          <div className="card-actions justify-end">
            <button className="btn bg-[#11285A] border-none text-white hover:bg-[#264da0]" onClick={handleClick}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
