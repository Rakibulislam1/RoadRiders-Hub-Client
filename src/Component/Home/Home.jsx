import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  const brands = useLoaderData([]);

  return (
    <div>
      <Banner></Banner>
      {/* ============= */}
      <div>
        <h2 className="text-center">Our Brands</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10">
          {brands.map((brand) => (
            <Brands key={brand.id} brand={brand}></Brands>
          ))}
        </div>
      </div>
      {/* ============= */}

      <WhyChooseUs></WhyChooseUs>

    </div>
  );
};

export default Home;
