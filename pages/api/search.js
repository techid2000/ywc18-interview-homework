import axios from 'axios';
import { isEqual } from 'lodash';

const handler = async (req, res) => {
  try {
    const { body } = req;

    const raw = await axios.get(process.env.API_PATH_YWC);

    let merchants = raw.data.merchants;

    if (body.shopNameTH) {
      merchants = merchants.filter((merchant) =>
        merchant.shopNameTH.includes(body.shopNameTH)
      );
    }

    if (body.categoryName) {
      merchants = merchants.filter((merchant) =>
        isEqual(merchant.categoryName, body.categoryName)
      );
    }

    if (body.addressProvinceName) {
      merchants = merchants.filter((merchant) =>
        isEqual(merchant.addressProvinceName, body.addressProvinceName)
      );
    }

    if (body.priceLevel) {
      merchants = merchants.filter((merchant) =>
        isEqual(merchant.priceLevel, body.priceLevel)
      );
    }

    if (body.subcategoryName) {
      merchants = merchants.filter((merchant) =>
        isEqual(merchant.subcategoryName, body.subcategoryName)
      );
    }

    res.statusCode = 200;
    res.json(merchants);
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.json(error);
  }
};

export default handler;
