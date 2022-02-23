import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll, faList, faSortNumericDown, faSortNumericUp, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp, faSun, faMoon);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'highlight.js/styles/dracula.css';
import 'styles/globals.css';
import 'styles/index.scss';
import 'react-toggle/style.css';

import ThemeProvider from 'providers/ThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
