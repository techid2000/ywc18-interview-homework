import axios from 'axios';

import '../src/scss/_app.scss';

import '../src/less/antd.less';
import '../src/scss/tailwind-build.scss';

axios.defaults.baseURL = process.env.API_PATH;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
