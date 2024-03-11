export const renderItems = (data) => {
  const ulList = document.createElement("ul");

  data.forEach((singer) => {
    const liSinger = document.createElement("li");
    const dlSinger = document.createElement("dl");
    liSinger.setAttribute("itemscope", "");
    liSinger.setAttribute("itemtype", "singers");

    dlSinger.innerHTML = `
      <dt>${singer.name}</dt>
      <img src="${singer.imageUrl}">
      <dt itemprop="shortDescription">${singer.shortDescription}</dt>
      <dt itemprop="description">${singer.description}</dt>
      <dt itemprop="yearOfBirth">Año de Nacimiento:${singer.facts.yearOfBirth}</dt>
      <dt itemprop="placeOfBirth">Lugar de Nacimiento:${singer.facts.placeOfBirth}</dt>
      <dt itemprop="mainGenre">Género:${singer.facts.mainGenre}</dt>
    `;

    liSinger.appendChild(dlSinger);
    ulList.appendChild(liSinger);
  });

  return ulList;
};

