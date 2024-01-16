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
    case "DVD":
      if (isNaN(dataFields.size.value) || dataFields.size.value < 0.1) {
        return [1, "enter a valid size"];
      }
      return [0, { size: dataFields.size.value }];

    case "book":
      if (isNaN(dataFields.weight.value) || dataFields.weight.value < 0.1) {
        return [1, "enter a valid weight"];
      }
      return [0, { weight: dataFields.weight.value }];

    case "furniture":
      if (
        isNaN(
          dataFields.height.value +
            dataFields.width.value +
            dataFields.len.value
        ) ||
        dataFields.height.value < 0.1 ||
        dataFields.width.value < 0.1 ||
        dataFields.len.value < 0.1
      ) {
        return [1, "enter a valid dimensions"];
      }
      return [
        0,
        {
          height: dataFields.height.value,
          width: dataFields.width.value,
          length: dataFields.len.value,
        },
      ];
    default:
      break;
  }
};
