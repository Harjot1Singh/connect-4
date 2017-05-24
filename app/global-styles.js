import { injectGlobal } from 'styled-components';

import Background from './images/background.png';
import FontAwesome from 'font-awesome/css/font-awesome.min.css'

/* eslint no-unused-expressions: 0 */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Orbitron');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Orbitron', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    background: url(${Background});
    background-color: green;
  }

  p,
  label {
    font-family:  'Open Sans, Times, 'Helvetica Neue', Helvetica, Arial, serif;
    line-height: 1.5em;
  }
`;
