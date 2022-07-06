const components = {
  Link: {
    baseStyle: {
      color: "primary.500",
      fontWeight: "semibold",
      fontSize: "sm",
      textDecoration: "underline",
      _hover: {
        color: "primary.700",
      },
      _active: {
        color: "primary.900",
      },
    },
  },
  Button: {
    baseStyle: {},
    variants: {
      tab: {
        borderRadius: "0",
        color: "neutral.900",
        fontWeight: "semibold",
        _active: {
          color: "primary.500",
          boxShadow: "inset 0 -2px 0 0 var(--chakra-colors-primary-500)",
        },
      },
      secondary: {
        borderRadius: "full",
        color: "primary.500",
        border: "2px solid",
        borderColor: "primary.500",
        fontWeight: "semibold",
        _hover: {
          backgroundColor: "primary.bg",
        },
        _active: {
          color: "primary.900",
          borderColor: "primary.900",
          backgroundColor: "primary.bg",
        },
      },
      ghost: {
        bg: "transparent",
        _hover: {
          bg: "neutral.100",
        },
        _active: {
          bg: "primary.bg",
        },
      },
    },
    sizes: {
      md: {
        h: "auto",
        px: 4,
        py: 3,
      },
    },
    defaultProps: {},
  },
  Heading: {
    baseStyle: {
      fontWeight: "regular",
    },
    sizes: {
      sm: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
        letterSpacing: "0",
      },
    },
  },
  Text: {},
  Avatar: {
    baseStyle: {
      bg: "neutral.300",
    },
    sizes: {},
    defaultProps: {},
  },
};

export default components;
