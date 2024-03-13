import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

// console.log(example, renderItems(data), data);

renderItems(data);

//variables
const container = document.querySelector("#root");
const mainGenre= document.querySelector('#mainGenre');


container.appendChild(renderItems(data));

//eventos
mainGenre.addEventListener('change', (e) =>{
    const optionValue= e.target.value;
    const filterResult= filterData(data,'mainGenre', optionValue);
    console.log(renderItems(filterResult))
});