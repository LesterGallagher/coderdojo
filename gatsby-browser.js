import 'core-js/modules/es6.set'; 
import 'core-js/modules/es6.map';
import 'core-js/modules/es6.symbol';
import 'core-js/es6/string';

import 'raf/polyfill';

import 'bootswatch/sandstone/bootstrap.css';
import './src/styles/global.css';

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', { offset: () => 80 })
}

export const onClientEntry = () => {
// Without this function body the import will not be picked up.
}
