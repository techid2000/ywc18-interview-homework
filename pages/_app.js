import axios from 'axios';

import '../src/frontend/less/antd.less';
import '../src/frontend/scss/tailwind-build.scss';

axios.defaults.baseURL = process.env.API_PATH;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
