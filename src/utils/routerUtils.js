export const getSearchReplaceURL = (criteria) => {
  const {
    shopNameTH,
    categoryName,
    addressProvinceName,
    priceLevel,
    subcategoryName,
  } = criteria;

  let url = '/search/result';

  url += `?searchQuery=${encodeURI(shopNameTH)}&category=${encodeURI(
    categoryName
  )}&province=${encodeURI(addressProvinceName)}&priceLevel=${encodeURI(
    priceLevel
  )}&subcategory=${encodeURI(subcategoryName)}`;

  return url;
};
