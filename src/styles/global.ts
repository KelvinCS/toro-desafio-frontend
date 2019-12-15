import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
  font-family: "DINPro Light";
  font-style: normal;
  font-weight: normal;
  src: local("DINPro Light"),
    url("./assets/fonts/DINPro-Light tr.woff") format("woff");
}

@font-face {
  font-family: "DINPro Medium";
  font-style: normal;
  font-weight: normal;
  src: local("DINPro Medium"),
    url("./assets/fonts/DINPro-Medium tr.woff") format("woff");
}

@font-face {
  font-family: "DINPro Bold";
  font-style: normal;
  font-weight: normal;
  src: local("DINPro Bold"),
    url("./assets/fonts/DINPro-Bold tr.woff") format("woff");
}

@font-face {
  font-family: "DINPro Black";
  font-style: normal;
  font-weight: normal;
  src: local("DINPro Black"),
    url("./assets/fonts/DINPro-Black tr.woff") format("woff");
}

body {
  margin: 0;
  font-family: DINPro, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
