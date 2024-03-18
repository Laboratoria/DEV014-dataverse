import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

// console.log(example, renderItems(data), data);

renderItems(data);

//variables
const container = document.querySelector("#root");
const mainGenre = document.querySelector("#mainGenre");
const compute = document.getElementById("compute");
const changeCompute = document.getElementById("conteinerCompute");
changeCompute.style.display = "none";
const cleanButton = document.getElementById("buttonClear")
const sort = document.querySelector("#sort");

container.appendChild(renderItems(data));

//eventos
mainGenre.addEventListener("change", (e) => {
  const optionValue = e.target.value;
  const filterResult = filterData(data, "mainGenre", optionValue);
  container.appendChild(renderItems(filterResult));

  sort.addEventListener("change", (e) => {
    const optionSort = e.target.value;
    const sortResult = sortData(filterResult, "yearOfBirth", optionSort);
    container.appendChild(renderItems(sortResult));
  });
});
sort.addEventListener("change", (e) => {
  const optionSort = e.target.value;
  const sortResult = sortData(data, "yearOfBirth", optionSort);
  container.appendChild(renderItems(sortResult));
});

compute.addEventListener("click", function () {
  const cumputeResult = computeStats(data);
  if (changeCompute.style.display === "none") {
    changeCompute.style.display = "block";
    changeCompute.innerHTML =
      "Sabias que el:   " +
      cumputeResult +
      "%" +
      " de cantantes nacieron entre 1970 y 1990";
  } else {
    changeCompute.style.display = "none";
  }
});

cleanButton.addEventListener('click', () => {
  container.appendChild(renderItems(data));
  changeCompute.innerHTML = ""
  mainGenre.options[0].selected = true;
  sort.options[0].selected = true;
})
