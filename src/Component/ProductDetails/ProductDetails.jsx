import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();

  const {
    user: { email },
  } = useContext(AuthContext);

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
  console.log(product);
  const handleClick = async () => {
    await fetch(
      "https://automotive-i0oyj7dpn-rakibulislam1.vercel.app/add-to-cart",
      {
        method: "PUT",
        body: JSON.stringify({ id, photo, brand, name, email, price }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Product added successfully",
    });
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
            <button
              className="btn bg-[#11285A] border-none text-white hover:bg-[#264da0]"
              onClick={handleClick}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
