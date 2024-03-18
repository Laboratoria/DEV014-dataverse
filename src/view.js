export const renderItems = (data) => {
  const container = document.querySelector("#root");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const ulList = document.createElement("ul");
  ulList.classList.add("styleUl");

  data.forEach((singer) => {
    const liSinger = document.createElement("li");
    liSinger.classList.add("styleLi");
    const dlSinger = document.createElement("dl");
    liSinger.setAttribute("itemscope", "");
    liSinger.setAttribute("itemtype", "singers");

    dlSinger.innerHTML = `
      <dt class="nameSinger">${singer.name}</dt>
      <img src="${singer.imageUrl}">
      <dt itemprop="shortDescription" class="shortDescription" >${singer.shortDescription}</dt>
      <dt itemprop="yearOfBirth" class="yearOfBirth"> <span>Año de Nacimiento:</span> ${singer.facts.yearOfBirth}</dt>
      <dt itemprop="placeOfBirth" class="placeOfBirth"> <span>Lugar de Nacimiento:</span> ${singer.facts.placeOfBirth}</dt>
      <dt itemprop="mainGenre" class="mainGenre"> <span>Género:</span>${singer.facts.mainGenre}</dt>
    `;

    liSinger.appendChild(dlSinger);
    ulList.appendChild(liSinger);
  });

  return ulList;
};
