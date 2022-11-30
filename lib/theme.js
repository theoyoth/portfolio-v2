import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f1f1f2", "#202023")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#0D63A5", "#ecb365")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Poppins'",
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
