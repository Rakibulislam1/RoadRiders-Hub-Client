import { useLoaderData } from "react-router-dom";
import AllProductCard from "./AllProductCard";
import Banner from "../Banner/Banner";

const AllProduct = () => {
  const allProduct = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-5 px-5 lg:px-0 max-w-7xl mx-auto">
        {allProduct.length ? (
          allProduct.map((product) => (
            <AllProductCard
              key={product._id}
              product={product}
            ></AllProductCard>
          ))
        ) : (
          <h1>Coming soon!</h1>
        )}
      </div>
    </div>
  );
};

export default AllProduct;
