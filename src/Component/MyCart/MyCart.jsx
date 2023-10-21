
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";

const MyCart = () => {
  const data = useContext(AuthContext);
  const email = data.user.email;
  const [carts, setCarts] = useState([]);
  console.log(carts);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/request-cart", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setCarts(data);
    };
    fetchData();
  }, []);

  const deleteHandle = async (id) => {
    const originalCartItems = [...carts];
    setCarts((items) => {
      const data = items.filter((item) => item.id !== id);
      return data;
    });

    try {
      const response = await fetch("http://localhost:5000/delete-cart-item", {
        method: "DELETE",
        body: JSON.stringify({ id, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("deletion failed");
    } catch (err) {
      setCarts(originalCartItems);
    }
  };
  return (
    <>
      {!carts.length ? (
        <h1 className="text-center my-10 text-2xl font-bold text-[#11285A]">Empty Cart</h1>
      ) : (
        <div>
          <h2 className="text-center my-10 text-2xl font-bold text-[#11285A]">This is my Cart</h2>
          {carts.map((cart, index) => (
            <div className="container mx-auto" key={index}>
              <div className="card rounded-xl h-60 md:card-side bg-base-100 shadow-2xl my-10">
                <img className="h-full" src={cart.photo} alt="Movie" />
                <div className="card-body">
                  <div className="flex">
                    <p className="text-xl font-semibold">{cart.name}</p>
                  </div>

                  <p className="font-medium">Price : ${cart.price}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500"></div>
                  <hr className="my-1" />

                  <div className="card-actions justify-end">
                    <button
                      onClick={() => deleteHandle(cart.id)}
                      className="btn btn-ghost text-white bg-[#264da0] font-semibold hover:bg-[#264da0]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyCart;

/**
 *
 *
 */
