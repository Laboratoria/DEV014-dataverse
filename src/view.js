export const renderItems = (data) => {
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
      <dt>${singer.shortDescription}</dt>
      <dt>${singer.description}</dt>
      <dt>Año de Nacimiento:${singer.facts.yearOfBirth}</dt>
      <dt>Lugar de Nacimiento:${singer.facts.placeOfBirth}</dt>
      <dt>Género:${singer.facts.mainGenre}</dt>
    `;

    liSinger.appendChild(dlSinger);
    ulList.appendChild(liSinger);
  });

  return ulList;
};

