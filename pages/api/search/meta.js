import axios from 'axios';
import { omit } from 'lodash';

const handler = async (req, res) => {
  try {
    const raw = await axios.get(process.env.API_PATH_YWC);
    let meta = omit(raw.data, ['merchants']);

    // [🐛] Remove some duplicated subcategories
    meta = {
      ...meta,
      categories: meta.categories.map((category) => ({
        ...category,
        subcategories: [...new Set(category.subcategories)],
      })),
    };

    res.statusCode = 200;
    res.json(meta);
  } catch (error) {
    res.statusCode = 500;
    res.json(error);
  }
};

export default handler;
