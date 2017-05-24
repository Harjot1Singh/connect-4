// Library Imports
import React from 'react';
import styled from 'styled-components';

// A styled div for containing items
export default styled.div`
 
  
  @media only screen and (min-width: 1024px) {
    /* desktop */
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 767px) {
    /* phones */
  }

  @media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
  }
`;

