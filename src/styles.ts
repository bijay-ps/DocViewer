/*
  Define Pilet wide used CSS classes here, but beware of collisions!
  When you for example define styles for general selector "div", this will affect all other Pilets and the app shell.

  So only use your own classes and ideally prefix them with your Pilet name or any other agreed prefix.

  See https://docs.piral.io/guidelines/tutorials/20-migrate-app#create-react-app-into-pilet for best practices on styling Pilets.
  The second half of the chapter talks about importing existing global CSS into a Pilet.

  Fyi: This template has https://styled-components.com/ configured and ready to use, see example Page1.tsx.
  */

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .my-pilet-error {
    display: block;
    color: red;
  }
`;

export default GlobalStyle;
