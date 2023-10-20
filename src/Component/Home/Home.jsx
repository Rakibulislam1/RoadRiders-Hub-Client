import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import PeopleReview from "../PeopleReview/PeopleReview";

const Home = () => {
  const brands = useLoaderData([]);

  return (
    <div>
      <Banner></Banner>
      {/* ============= */}
      <div>
        <h2 className="text-center my-10 text-2xl font-bold text-[#11285A]">Our Brands</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10">
          {brands.map((brand) => (
            <Brands key={brand.id} brand={brand}></Brands>
          ))}
        </div>
      </div>
      {/* ============= */}
      
      <PeopleReview></PeopleReview>
      <WhyChooseUs></WhyChooseUs>

    </div>
  );
};

export default Home;
