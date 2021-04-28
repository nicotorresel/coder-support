import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  colors: {
    primary: theme.colors.twitter,
  },
  styles: {
    global: (props) => ({
      "html, body, #root": {
        color: mode(undefined, "purple.600")(props),
        height: "100%",
      },
    }),
  },
  fontSizes: {
    sm: "0.95rem",
    xs: "0.9rem",
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 5,
        borderRightRadius: 5,
      },
      sizes: {
        lg: {
          paddingY: 3,
          fontSize: "md",
        },
      },
    },
  },
});
