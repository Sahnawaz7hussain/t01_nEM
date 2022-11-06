import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  image,
  category,
  price,
  handleDeleteProduct,
}) => {
  return (
    <div data-cy={`product-card-${id}`}>
      <div data-cy="product-card-name">{name}</div>
      <div data-cy="product-card-category">{category}</div>
      <div>
        <img
          width={"300px"}
          height="200px"
          data-cy="product-card-image"
          src={image}
          alt="Product"
        />
      </div>
      <div data-cy="product-card-price">€ {price}</div>
      <div>
        <button onClick={() => handleDeleteProduct(id)} data-cy="delete-button">
          Delete Product
        </button>
        <Link to={`/edit/${id}`}>
          <button data-cy="edit-button">Edit Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
