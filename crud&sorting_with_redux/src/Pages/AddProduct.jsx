import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProductActionFn } from "../Redux/action";

const newProductPlate = {
  name: "",
  category: "",
  image: "",
  price: 0,
};
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState(newProductPlate);

  const handleOnChangeOnAddProduct = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleAddProductOnClick = () => {
    if (
      newProduct.name &&
      newProduct.category &&
      newProduct.image &&
      newProduct.price
    ) {
      dispatch(addNewProductActionFn(newProduct)).then((res) => {
        navigate("/");
      });
      setNewProduct(newProductPlate);
    }
  };
  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <div>
          <label>Product title</label>
          <input
            value={newProduct.name}
            name="name"
            onChange={handleOnChangeOnAddProduct}
            data-cy="add-product-title"
            type="text"
          />
        </div>
        <div>
          <label>Product Category</label>
          <select
            value={newProduct.category}
            name="category"
            onChange={handleOnChangeOnAddProduct}
            data-cy="add-product-category"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            value={newProduct.image}
            name="image"
            onChange={handleOnChangeOnAddProduct}
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
            value={newProduct.price}
            name="price"
            onChange={handleOnChangeOnAddProduct}
            data-cy="add-product-price"
            type="number"
          />
        </div>
        <div>
          <button
            onClick={handleAddProductOnClick}
            data-cy="add-product-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
