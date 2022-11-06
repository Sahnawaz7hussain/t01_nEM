import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProductsActionFn, updateProductActionFn } from "../Redux/action";

const Editpage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((store) => {
    return store.products;
  });

  useEffect(() => {
    if (products.length <= 0) {
      dispatch(getProductsActionFn());
    }
  }, []);
  useEffect(() => {
    if (id) {
      let currentProduct = products.find((el) => el.id == id);

      if (currentProduct) {
        setName(currentProduct.name);
        setPrice(currentProduct.price);
      }
    }
  }, [id, products]);
  const handleEditProduct = () => {
    if (name && price) {
      let newdata = {
        name,
        price,
      };
      dispatch(updateProductActionFn(id, newdata)).then((res) => {
        navigate("/");
      });
      // console.log("edit products::", price);
    }
  };
  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          data-cy="edit-product-title"
          type="text"
        />
      </div>
      <div>
        <label>Product Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          data-cy="edit-product-price"
          type="number"
        />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button onClick={handleEditProduct} data-cy="update-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default Editpage;
