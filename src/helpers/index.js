const checkTypeVariabel = (variabel) => {
  if (typeof variabel === "object") {
    if (Array.isArray(variabel)) {
      return "array";
    }
    return "object";
  }
  return typeof variabel;
};

const setEmpy = (variabel) => {
  let type = checkTypeVariabel(variabel);
  if (type === "array") {
    variabel = [];
  } else if (type === "object") {
    variabel = {};
  }
  variabel = null;
  return variabel;
};

export { checkTypeVariabel, setEmpy };
