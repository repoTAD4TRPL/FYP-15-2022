import ActionRedux from "../redux/actions";

const reduxState = (state) => state;

const reduxDispatch = (dispatch) => {
  let result = {};
  let skip = ["length", "name", "prototype"];
  Object.getOwnPropertyNames(ActionRedux).forEach((i) => {
    if (!skip.includes(i)) {
      result[i] = (data) => dispatch(ActionRedux[i](data));
    }
  });
  return result;
};

export { reduxDispatch, reduxState };
