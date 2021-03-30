import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      text: string;

      search: string;
      twitter: string;

      black: string;
      white: string;
      gray: string;

      outline: string;

      retweet: string;
      like: string;

      twitterDarkHover: string;
      twitterLightHover: string;

      profile: string;
      profileBackground: string;

      themeButton: string;
    };
  }
}
