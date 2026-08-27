import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text_color: string;
      accent: string;
      highlight: string;
      hover_bg: string;
    };
    box_shadow: string;
  }
}
