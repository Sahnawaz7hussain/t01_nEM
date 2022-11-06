import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>Product Dashboard</div>
      <div>
        <Link to="/add">
          <button data-cy="add-product-navbar-button">Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
