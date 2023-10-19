/* eslint-disable react/no-unescaped-entities */
import { FaTags, FaCar } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import eggShape from "../../assets/eggshape.svg";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-5">
      <h2 className="text-center my-10 text-2xl font-bold">Why Choose Us?</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="card card-compact bg-base-100 hover:shadow-xl transition duration-500 p-5">
          <figure>
            <span>
              <div className="relative w-32">
                <img src={eggShape} alt="" />
                <FaTags className="text-4xl text-purple-950 absolute top-12 left-12"></FaTags>
              </div>
            </span>
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-semibold text-center">Best Price</h2>
            <p className="text-center">
            Our commitment to providing the best price ensures you receive high-quality products or services at the most affordable rates.
            </p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 hover:shadow-xl transition duration-500 p-5">
          <figure>
            <span>
              <div className="relative w-32">
                <img src={eggShape} alt="" />
                <FaCar className="text-4xl text-purple-950 absolute top-10 left-12"></FaCar>
              </div>
            </span>
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-semibold text-center">Trusted By Thousands</h2>
            <p className="text-center">
            Trusted by thousands: Proven reliability and customer satisfaction, making us a reliable choice for your needs.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 hover:shadow-xl transition duration-500 p-5">
          <figure>
            <span>
              <div className="relative w-32">
                <img src={eggShape} alt="" />
                <VscWorkspaceTrusted className="text-4xl text-purple-950 absolute top-10 left-12"></VscWorkspaceTrusted>
              </div>
            </span>
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-semibold text-center">Wide Range of Brands</h2>
            <p className="text-center">
            We offer a diverse collection of top brands, providing you with a wide range of choices for your preferences and needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
