import { createGlobalStyle, withTheme } from 'styled-components';

const globalStyle = createGlobalStyle`

*{
   margin:0;
   padding:0;
   box-sizing: border-box; 

   color: var(--text);
   
}

html,body, #root {
  max-height: 100vh;
  max-width: 100vw;
}

*, button, input {
  border: 0;
  background: none;
  font-family:  --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html {
  background: var(--primary);
}


:root{
  
  
  --primary: ${(props) => props.theme.colors.primary};
  --secondary: ${(props) => props.theme.colors.secondary};
  --text: ${(props) => props.theme.colors.text};
  
  --search: ${(props) => props.theme.colors.search};
  --twitter: ${(props) => props.theme.colors.twitter};

  --black: ${(props) => props.theme.colors.black};
  --white: ${(props) => props.theme.colors.white};
  --gray: ${(props) => props.theme.colors.gray};
  
  --outline: ${(props) => props.theme.colors.outline};
  
  --retweet: ${(props) => props.theme.colors.retweet};
  --like: ${(props) => props.theme.colors.like};
  
  
 
  --twitter-dark-hover: ${(props) => props.theme.colors.twitterDarkHover};
  --twitter-light-hover:${(props) => props.theme.colors.twitterLightHover};

  --profile:${(props) => props.theme.colors.profile};
  --profile-background: ${(props) => props.theme.colors.profileBackground};

  --theme-button :${(props) => props.theme.colors.themeButton};

}

`;

export default withTheme(globalStyle);
