import axios from "axios";
import TYPE_REDUCER from "../reducer/type";

class ActionRedux {
  /**
   *
   * @param {{name:string, value:any}} data
   * @returns
   */
  static setItem = (data) => (dispatch) => {
    return dispatch({ type: TYPE_REDUCER.CHANGE_VALUE, value: data });
  };
  /**
   *
   * @param {{name:string, value:any}} data
   * @returns
   */
  static addItem = (data) => (dispatch) => {
    return dispatch({ type: TYPE_REDUCER.ADD_VALUE, value: data });
  };
  /**
   *
   * @param {{name:string, filter:function}} data
   * @returns
   */
  static deleteItem = (data) => (dispatch) => {
    return dispatch({ type: TYPE_REDUCER.DELETE_VALUE, value: data });
  };
  /**
   *
   * @param {{name:string, value:any, filter:function}} data
   * @returns
   */
  static editItem = (data) => (dispatch) => {
    return dispatch({ type: TYPE_REDUCER.EDIT_VALUE, value: data });
  };
  /**
   *
   * @param {{name:string}} data
   * @returns
   */
  static setNull = (data) => (dispatch) => {
    return dispatch({ type: TYPE_REDUCER.SET_NULL, value: data });
  };
  /**
   *
   * @param {{name:string}} data
   * @returns
   */
  static setEmpty = (data) => (dispatch) => {
    return dispatch({ type: TYPE_REDUCER.SET_EMPTY, value: data });
  };
  /**
   *
   * @param {{
   * method:string,
   * path:string,
   * data: any,
   * config: any
   * }} args
   * @returns {Promise<any>}
   */
  static createRequestAxios = (args) => {
    if (args.method === "POST") {
      return axios.post(args.path, args.data || {}, args.config || {});
    } else if (args.method === "PUT") {
      return axios.put(args.path, args.data || {}, args.config || {});
    } else if (args.method === "DELETE") {
      return axios.get(args.path, args.config || {});
    }
    return axios.get(args.path, args.config || {});
  };
  /**
   *
   * @param {{
   * method: string,
   * path: "string",
   * name: "string",
   * data: any,
   * config: any,
   * FAS: function,
   * FAE: function,
   * }} args
   * @returns {Promise<any>}
   */
  static sendCustomApi = (args) => (dispatch) => {
    return new Promise((resolve, reject) => {
      ActionRedux.createRequestAxios(args)
        .then((res) => {
          args.FAS(args, res);
          resolve(res.status);
        })
        .catch((err) => {
          args.FAE(args, err);
          reject(err.response || err.toString());
        });
    });
  };

  // Contoh function add
  /**
   *
   * @param {{
   * method: string,
   * path: "string",
   * data: any,
   * config: any,
   * name: "string",
   * AD: function,
   * FAS: function,
   * FAE: function,
   * }} args
   * @returns {Promise<any>}
   */
  static setItemApi = (args) => (dispatch) => {
    return new Promise((resolve, reject) => {
      ActionRedux.createRequestAxios(args)
        .then((res) => {
          ActionRedux.setItem({
            name: args.name,
            value: args.AD ? args.AD() : res.data.data,
          });

          resolve(res.status);
        })
        .catch((err) => {
          reject(err.response || err.toString());
        });
    });
  };
}
export default ActionRedux;
