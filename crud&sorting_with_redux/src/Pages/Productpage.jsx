import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { deleteProductActionFn, getProductsActionFn } from "../Redux/action";

const Productpage = () => {
  const dispatch = useDispatch();
  const [searcParams] = useSearchParams();
  const sortBy = searcParams.get("sortBy") || "";
  console.log("search params.:::", sortBy);
  const { products, isLoading, isError } = useSelector((store) => {
    return {
      products: store.products,
      isLoading: store.isLoading,
      isError: store.isError,
    };
  }, shallowEqual);
  // useEffect to get Products.
  useEffect(() => {
    dispatch(getProductsActionFn(sortBy));
  }, [searcParams, sortBy]);
  // DELETE PRODUCT FUNCTION.

  const handleDeleteProduct = (id) => {
    if (id) {
      dispatch(deleteProductActionFn(id)).then((r) => {
        dispatch(getProductsActionFn(sortBy));
      });
    }
  };
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div style={{ width: "100%" }}>
      {isError && <h4>Something wend wrong....</h4>}
      <div>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
        {products?.map((el) => (
          <ProductCard
            key={el.id}
            {...el}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Productpage;
