import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

console.log(example, renderItems(data), data);

renderItems(data);

const container = document.querySelector("#root");
container.appendChild(renderItems(data));
