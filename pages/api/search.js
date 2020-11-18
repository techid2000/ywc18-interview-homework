import axios from 'axios';
import { isEqual } from 'lodash';
import {
  filterByAddressProvinceName,
  filterByCategoryName,
  filterByPriceLevel,
  filterByShopNameTH,
  filterBySubcategoryName,
} from '../../src/backend/services/searchServices';

const handler = async (req, res) => {
  try {
    const { body } = req;

    const raw = await axios.get(process.env.API_PATH_YWC);

    let merchants = raw.data.merchants;

    merchants = filterByShopNameTH(merchants, body.shopNameTH);
    merchants = filterByCategoryName(merchants, body.categoryName);
    merchants = filterByAddressProvinceName(
      merchants,
      body.addressProvinceName
    );
    merchants = filterByPriceLevel(merchants, body.priceLevel);
    merchants = filterBySubcategoryName(merchants, body.subcategoryName);

    res.statusCode = 200;
    res.json(merchants);
  } catch (error) {
    res.statusCode = 500;
    res.json(error);
  }
};

export default handler;
