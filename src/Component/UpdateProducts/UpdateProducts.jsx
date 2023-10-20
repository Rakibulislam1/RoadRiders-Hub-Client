import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const updateProduct = useLoaderData();

  const { _id, name, photo, brand, type, price, description, rating } =
    updateProduct;



    const handleUpdateProduct = event => {
      event.preventDefault();
      const form = event.target;
  
      const name = form.name.value;
      const brand = form.brand.value;
      const type = form.type.value;
      const price = form.price.value;
      const description = form.description.value;
      const rating = form.rating.value;
      const photo = form.photo.value;
  
      const updatedProduct = {
        name, brand, type, price, description, rating, photo
      }
      console.log(updatedProduct);
  
      fetch(`http://localhost:5000/product/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Product Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
        form.reset()
      })
    }




  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="my-16 bg-base-100 shadow-2xl lg:px-20 px-5 pt-5 pb-20 rounded-lg">
          <h2 className="text-center md:text-4xl text-xl font-semibold my-5 text-[#11285A]">
            Update Product Here : {name}
          </h2>

          <form onSubmit={handleUpdateProduct}>
            <div className="flex md:gap-5 flex-col md:flex-row">
              {/* name & brand */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="brand"
                    defaultValue={brand}
                    placeholder="Brand Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="flex md:gap-5 flex-col md:flex-row">
              {/* type & price */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="type"
                    defaultValue={type}
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    placeholder="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="flex md:gap-5 flex-col md:flex-row">
              {/* description & Rating */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Short description
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    placeholder="Short description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="flex md:gap-5 flex-col md:flex-row">
              {/* photo URL */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <button className="btn bg-[#11285A] hover:bg-[#264da0] border-none text-white capitalize btn-block mt-10">
              Update Your Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
