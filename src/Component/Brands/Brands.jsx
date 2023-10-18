import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Brands = ({ brand }) => {
  const { brand_img, brand_name } = brand;

  return (
    <Link to={`/allProduct/${brand_name}`} className="px-5 my-5">
      <div className="card bg-base-100 shadow-xl image-full h-64">
        <figure>
          <img className="w-full"
            src={brand_img}
            alt={brand_img}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-40">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brands;
