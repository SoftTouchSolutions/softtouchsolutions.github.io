const AddToCart = (id) => async (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: id
  });
};
const ProductReduxData = (id) => async (dispatch) => {
  dispatch({
    type: "PRODUCT",
    payload: id
  });
};
export {
  AddToCart as A,
  ProductReduxData as P
};
