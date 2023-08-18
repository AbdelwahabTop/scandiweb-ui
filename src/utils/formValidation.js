export const isFormValid = (products, dataFields) => {
  for (let i in products) {
    if (products[i].sku === dataFields.sku.value) {
      return [1, "enter valid sku, this product already exist"];
    }
  }

  if (dataFields.sku.value.length > 30 || dataFields.name.value.length > 30) {
    return [1, "enter shorter name or sku"];
  }

  switch (dataFields.types.value) {
    case "dvd":
      if (isNaN(dataFields.size.value) || dataFields.size.value < 0.1) {
        return [1, "enter a valid size"];
      }
      return [0, `Size: ${dataFields.size.value} MB`];

    case "book":
      if (isNaN(dataFields.weight.value) || dataFields.size.value < 0.1) {
        return [1, "enter a valid weight"];
      }
      return [0, `Weight: ${dataFields.weight.value} Kg`];

    case "furniture":
      if (
        isNaN(
          dataFields.height.value +
            dataFields.width.value +
            dataFields.len.value
        ) ||
        dataFields.size.value < 0.1
      ) {
        return [1, "enter a valid dimensions"];
      }
      return [
        0,
        `Dimensions: ${dataFields.height.value}x${dataFields.width.value}x${dataFields.len.value}`,
      ];
    default:
      break;
  }
};
