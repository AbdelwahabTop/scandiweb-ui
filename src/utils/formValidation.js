export const isFormValid = (products, dataFields) => {
  for (let i in products) {
    if (products[i].sku === dataFields.sku.value) {
      return [1, "enter valid sku, this product already exist"];
    }
  }

  switch (dataFields.types.value) {
    case "dvd":
      if (isNaN(dataFields.size.value)) {
        return [1, "enter a valid size"];
      }
      return [0, `Size: ${dataFields.size.value} MB`];

    case "book":
      if (isNaN(dataFields.weight.value)) {
        return [1, "enter a valid weight"];
      }
      return [0, `Weight: ${dataFields.weight.value} Kg`];

    case "furniture":
      if (
        isNaN(
          dataFields.height.value +
            dataFields.width.value +
            dataFields.len.value
        )
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
