import axios from "axios";
import * as types from "./actionTypes";
const getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};
const getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload };
};
const getProductsFailure = () => {
  return { type: types.GET_PRODUCTS_FAILURE };
};
export const getProductsActionFn = (sortBy) => (dispatch) => {
  // console.log("data:::", data);
  dispatch(getProductsRequest());
  return axios
    .get(`http://localhost:8080/products?_sort=name&_order=${sortBy}`)
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch(getProductsFailure());
};
// ADD NEW DATA
const addnewProductRequest = () => {
  return { type: types.ADD_PRODUCT_REQUEST };
};
const addnewProductSuccess = (payload) => {
  return { type: types.ADD_PRODUCT_SUCCESS, payload };
};
const addnewProductFailure = () => {
  return { type: types.ADD_PRODUCT_FAILURE };
};

export const addNewProductActionFn = (payload) => (dispatch) => {
  dispatch(addnewProductRequest());

  return axios
    .post("http://localhost:8080/products", payload)
    .then((res) => {
      return dispatch(addnewProductSuccess(res.data));
    })
    .catch((e) => {
      dispatch(addnewProductFailure(e));
    });
};

// UPDATE PRODUCT
const updateProductRequest = () => {
  return { type: types.EDIT_PRODUCT_REQUEST };
};
const updateProductSuccess = (payload) => {
  return { type: types.EDIT_PRODUCT_SUCCESS, payload };
};
const updateProductFailure = () => {
  return { type: types.EDIT_PRODUCT_FAILURE };
};
export const updateProductActionFn = (id, payload) => (dispatch) => {
  dispatch(updateProductRequest());
  return axios
    .patch("http://localhost:8080/products/" + id, payload)
    .then((res) => {
      return dispatch(updateProductSuccess());
    })
    .catch((err) => {
      dispatch(updateProductFailure());
    });
};

//DELETE PRODUCT
const deleteProductRequest = () => {
  return { type: types.DELETE_PRODUCT_REQUEST };
};
const deleteProductSuccess = () => {
  return { type: types.DELETE_PRODUCT_SUCCESS };
};
const deleteProductFailure = () => {
  return { type: types.DELETE_PRODUCT_FAILURE };
};

export const deleteProductActionFn = (id) => (dispatch) => {
  dispatch(deleteProductRequest());
  return axios
    .delete("http://localhost:8080/products/" + id)
    .then((r) => {
      return dispatch(deleteProductSuccess(r.data));
    })
    .catch((e) => {
      dispatch(deleteProductFailure(e));
    });
};
