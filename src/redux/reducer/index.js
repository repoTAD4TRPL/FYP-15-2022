import constants, {
  TYPE_QUESTION_ONE,
  TYPE_QUESTION_TWO,
} from "../../constants";
import { checkTypeVariabel, setEmpy } from "../../helpers";
import GET_LANGUAGES from "../../lang";
import TYPE_REDUCER from "./type";

const initialState = {
  lang: GET_LANGUAGES.EN,
  isLogin: false,
  user: {},
  selectedSoap: {
    method: "",
    duration: 0,
    flow: null,
  },
  answer: [
    ...constants.QUESTIONS.map((item) => {
      console.log("Here");
      if (item.type === TYPE_QUESTION_ONE || item.type === TYPE_QUESTION_TWO) {
        return [...(Array(item.key.length).map(()=> "Andree"))];
      }return "";
    }),
  ],
  answare: {},
  isTransparent: false,
};

const reducer = (state = initialState, actions) => {
  if (actions.type === TYPE_REDUCER.CHANGE_VALUE) {
    return {
      ...state,
      [actions.value.name]: actions.value.value,
    };
  }
  if (actions.type === TYPE_REDUCER.ADD_VALUE) {
    let data = state[actions.value.name];
    let type = checkTypeVariabel(data);
    if (type === "array") {
      data.push(actions.value.value);
    } else if (type === "object") {
      data = { ...data, ...actions.value.value };
    }
    return {
      ...state,
      [actions.value.name]: data,
    };
  }
  if (actions.type === TYPE_REDUCER.DELETE_VALUE) {
    let data = state[actions.value.name];
    let type = checkTypeVariabel(data);
    if (type === "array") {
      let filter = actions.value.filter;
      let index = data.findIndex((i) => filter(i));
      data.splice(index, 1);
    } else if (type === "object") {
      delete data[actions.value.key];
    }
    return {
      ...state,
      [actions.value.name]: data,
    };
  }
  if (actions.type === TYPE_REDUCER.EDIT_VALUE) {
    let data = state[actions.value.name];
    let type = checkTypeVariabel(data);
    if (type === "array") {
      let filter = actions.value.filter;
      let index = data.findIndex((i) => filter(i));
      data[index] = actions.value.value;
    } else if (type === "object") {
      data[actions.value.key] = actions.value.value;
    }
    return {
      ...state,
      [actions.value.name]: data,
    };
  }
  if (actions.type === TYPE_REDUCER.SET_EMPTY) {
    let data = state[actions.value.name];
    data = setEmpy(data);
    return {
      ...state,
      [actions.value.name]: data,
    };
  }
  if (actions.type === TYPE_REDUCER.SET_NULL) {
    return {
      ...state,
      [actions.value.name]: null,
    };
  }
  return state;
};

export default reducer;
