import Constant from "../../constants";

const BASE = Constant.BASE_URL;
const EXAMPLE_API = {
  path: BASE + "/example",
  method: "POST",
  data: {},
  // Options request AXIOS
  options: {},
  // if request is append you must define data add to first place or last place
  isLast: false,
  // Value that add or edit to store
  value: {},
  // Custom access data by default res.data.data
  AD: (i) => {},
  // Function Run After success and replace default function
  FAS: () => {},
  // Function Run after failed request and replace default function
  FAE: () => {},
};

export default EXAMPLE_API;
