/**
 *
 * @param {{
 * className: boolean
 * }} args
 *
 * @returns {string}
 * example:
 * {"example class": true}
 */
const buildClass = (args) => {
  let className = "";
  Object.keys(args).forEach((key) => {
    if (args[key]) {
      className += key + " ";
    }
  });
  return className;
};

export { buildClass };