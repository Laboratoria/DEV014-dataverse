export const filterData = (data, filterBy, value) => {
  // console.log('data', data);
  // console.log('filterBy', filterBy);
  // console.log('value', value);
  const filteredData = data.filter(item => {
    const filterParts = filterBy.split('.');
    let obj = item;
    for (let i = 0; i < filterParts.length; i++) {
      obj = obj[filterParts[i]];
    }
    return obj === value;
  });
  // console.log('filteredData', filteredData);
  // Devuelve el arreglo filtrado
  return filteredData;
};


export const sortBySharkSize = (data, sortBy, sortOrder) => {
  // console.log('data', data);
  // console.log('sortBy', sortBy);
  // console.log('sortOrder', sortOrder);
  const sortedData = data.sort((a, b) => {
    let sizeA, sizeB;

    // Obtener los tamaños de los tiburones basado en el campo especificado por sortBy
    if (sortBy) {
      sizeA = a[sortBy];
      sizeB = b[sortBy];
    } else {
      sizeA = a.maximumSizeMtr;
      sizeB = b.maximumSizeMtr;
    }

    // Determinar el orden de comparación basado en sortOrder
    const compareValue = sortOrder === 'desc' ? -1 : 1;

    // Realizar la comparación de tamaños
    if (sizeA < sizeB) {
      return -1 * compareValue;
    }
    if (sizeA > sizeB) {
      return 1 * compareValue;
    }
    return 0;
  });

  return sortedData;
};

