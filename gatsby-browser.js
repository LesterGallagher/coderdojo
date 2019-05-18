import 'core-js/es6/map';
import 'core-js/es6/set';

import 'raf/polyfill';

import 'bootswatch/sandstone/bootstrap.css';
import './src/styles/global.css';

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', { offset: () => 80 })
}
