import people_1 from "../../assets/peoplereview1.avif";
import people_2 from "../../assets/peoplereview2.avif";
import people_3 from "../../assets/peoplereview3.avif";
import Avaatar_1 from "../../assets/avatar1.jpg";
import Avaatar_2 from "../../assets/avatar2.jpg";
import Avaatar_3 from "../../assets/avatar3.jpg";

const PeopleReview = () => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <h2 className="text-center my-10 text-2xl font-bold text-[#11285A]">Get Car Reviews From Our Experts</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 px-5 lg:px-0 gap-5 cursor-pointer">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={people_1} alt={people_1} />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-lg">2023 Ram 3500</h2>
            <div>
              <div className="avatar flex gap-5 pl-12 items-center">
                <div className="w-20 mask mask-hexagon">
                  <img src={Avaatar_1} />
                </div>
                <p className="font-semibold">by Matt DiGiulio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={people_2} alt={people_1} />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-lg">2022 Rolls-Royce Phantom</h2>
            <div>
              <div className="avatar flex gap-5 pl-12 items-center">
                <div className="w-20 mask mask-hexagon">
                  <img src={Avaatar_2} />
                </div>
                <p className="font-semibold">by Matt DiGiulio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={people_3} alt={people_1} />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-lg">2023 Chevrolet Express Passenger</h2>
            <div>
              <div className="avatar flex gap-5 pl-12 items-center">
                <div className="w-20 mask mask-hexagon">
                  <img src={Avaatar_3} />
                </div>
                <p className="font-semibold">by Matt DiGiulio</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default PeopleReview;
