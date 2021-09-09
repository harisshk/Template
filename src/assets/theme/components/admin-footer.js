import theme from "../theme.js";
const componentStyles = () => ({
  listItemRoot: {
    width: "auto",
    color: "grey",
    fontSize: ".875rem",
  },
  copyrightWrapper: {
    color: "grey",
    fontSize: ".875rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  copyrightLink: {
    fontWeight: "600",
    marginLeft: ".25rem",
    color: theme.palette.primary.main,
    backgroundColor: "initial",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  justifyContentCenter: {
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center!important",
    },
  },
  flexDirectionColumn: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column!important",
    },
  },
});

export default componentStyles;
