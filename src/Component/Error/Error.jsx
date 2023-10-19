import { Link } from "react-router-dom";
import gif from "../../assets/404.gif";

const Error = () => {
  return (
    <div>
      <div className="h-[70vh] flex justify-center items-center">
        <img className="w-96" src={gif} alt="" />
      </div>
      <Link to='/'><button className="btn btn-accent block mx-auto">Go Back Home</button></Link>
    </div>
  );
};

export default Error;
