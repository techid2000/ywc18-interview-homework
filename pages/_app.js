import axios from 'axios';

import '../less/antd.less';
import '../scss/tailwind-build.scss';

axios.defaults.baseURL = process.env.API_PATH;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
