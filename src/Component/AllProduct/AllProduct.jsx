import { useLoaderData, useParams } from "react-router-dom";
import AllProductCard from "./AllProductCard";
import Banner from "../Banner/Banner";

const AllProduct = () => {
  const allProduct = useLoaderData();
  // const filterProduct = [useParams()];
  console.log(allProduct);

  return (
    <div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-5">
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
