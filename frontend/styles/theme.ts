import { ThemeConfig, extendTheme } from "@chakra-ui/react";

interface CustomTheme {
   fonts: {
      heading: string;
      body: string;
   };
   config: ThemeConfig;
}

const themeConfig: CustomTheme = {
   config: {
      initialColorMode: "light",
      useSystemColorMode: true,
   },
   fonts: {
      heading: "SCDream",
      body: "SCDream",
   },
};

const theme = extendTheme(themeConfig);

export default theme;
