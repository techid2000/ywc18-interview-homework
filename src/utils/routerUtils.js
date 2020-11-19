export const getSearchReplaceURL = (criteria) => {
  const {
    shopNameTH,
    categoryName,
    addressProvinceName,
    priceLevel,
    subcategoryName,
  } = criteria;

  let url = '/search/result';

  url += `?searchQuery=${encodeURIComponent(
    shopNameTH
  )}&category=${encodeURIComponent(categoryName)}&province=${encodeURIComponent(
    addressProvinceName
  )}&priceLevel=${encodeURIComponent(
    priceLevel
  )}&subcategory=${encodeURIComponent(subcategoryName)}`;

  return url;
};
