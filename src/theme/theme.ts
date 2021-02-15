import { color } from "./color";
import { values } from "./values";

export const componentsTheme = {
  // Box
  box: {
    width: "",
    margin: "",
    padding: "",
    background: color.white,
    borderRadius: "4px",
    border: `solid 1px ${color.linkWater}`,
    textAlign: "",
  },
  // Button
  button: {
    borderRadius: "4px",
    size: {
      small: {
        height: "28px",
        padding: "0 16px",
        fontSize: "14px",
      },
      medium: {
        height: "32px",
        padding: "0 12px",
        fontSize: "14px",
      },
      large: {
        height: "42px",
        padding: "0 52px",
        fontSize: "14px",
      },
    },
    default: {
      textColor: values.text.color.default,
      border: `${values.border.width.thin} solid ${color.linkWater}`,
      background: `linear-gradient(to bottom, ${color.white}, ${color.solitude})`,
      iconColor: color.silver,
      hover: {
        background: `linear-gradient(to bottom, ${color.solitude}, ${color.white})`,
      },
      active: {
        boxShadow: "0 0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    danger: {
      textColor: color.venetianRed,
      border: `${values.border.width.thin} solid ${color.linkWater}`,
      background: `linear-gradient(to bottom, ${color.white}, ${color.solitude})`,
      iconColor: color.venetianRed,
      hover: {
        background: `linear-gradient(to bottom, ${color.solitude}, ${color.white})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    primary: {
      textColor: color.white,
      border: `${values.border.width.thin} solid rgba(0, 0, 0, 0.15)`,
      background: `linear-gradient(to bottom, ${color.royalBlue}, ${color.cobalt} 100%)`,
      iconColor: color.white,
      hover: {
        background: `linear-gradient(to bottom, ${color.cobalt}, ${color.royalBlue})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    settings: {
      textColor: color.royalBlue,
      border: `${values.border.width.thin} solid ${color.linkWater}`,
      background: `linear-gradient(to bottom, ${color.white}, ${color.solitude})`,
      iconColor: color.royalBlue,
      hover: {
        background: `linear-gradient(to bottom, ${color.solitude}, ${color.white})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    disabled: {
      textColor: values.text.color.notes,
      border: `${values.border.width.thin} solid rgba(0, 0, 0, 0.1)`,
      background: color.linkWater,
      iconColor: values.text.color.notes,
      hover: {
        background: color.linkWater,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
  },
  // Icon
  icon: {
    fontSize: values.text.size.middle,
    color: values.text.color.default,
    hover: {
      color: values.text.color.default,
    },
  },
  // Heading
  heading: {
    color: {
      black: color.black,
      title: color.nightRider,
      blockTitle: color.dimGray,
    },
    fontSize: values.text.size,
    fontWeight: {
      light: "normal",
      default: "bold",
    },
  },
  // Link
  link: {
    display: "",
    alignItems: "",
    width: "",
    minHeight: "",
    padding: "",
    backgroundColor: "",
    color: color.royalBlue,
    fontSize: values.text.size.middle,
    textDecoration: "none",
    hover: {
      color: color.royalBlue,
      textDecoration: "underline",
    },
    active: {
      color: color.royalBlue,
      textDecoration: "none",
    },
    focus: {
      color: color.royalBlue,
      textDecoration: "none",
    },
    visited: {
      color: color.royalBlue,
      textDecoration: "none",
    },
    disabled: {
      color: color.nobel,
    },
  },
  // ProgressLabel
  progressLabel: {
    display: "inline-block",
    width: "80px",
    padding: "5px 9px 6px",
    backgroundColor: {
      waiting: color.white,
      inProgress: color.royalBlue,
      completed: color.lightSlateGrey,
    },
    borderWidth: values.border.width.bold,
    borderStyle: values.border.style.solid,
    borderColor: {
      waiting: color.lightSlateGrey,
      inProgress: color.royalBlue,
      completed: color.lightSlateGrey,
    },
    borderRadius: "20px",
    fontSize: values.text.size.small,
    color: {
      waiting: color.lightSlateGrey,
      inProgress: color.white,
      completed: color.white,
    },
    letterSpacing: "0.18px",
  },
  // Text
  text: values.text,
  // Tooltip
  tooltip: {
    height: "",
    padding: "8px 11px 6px 10px",
    backgroundColor: "rgba(51, 51, 51, 0.9)",
    borderRadius: "4px",
    fontSize: values.text.size.small,
    color: color.white,
  },
};

export const uiTheme = {
  // Footer
  footer: {
    height: "35px",
    padding: "9px 20px 10px",
    backgroundColor: color.whisper,
    borderTop: `1px solid ${color.linkWater}`,
  },
  // Header
  header: {
    height: "40px",
    padding: "10px 20px 10px 10px",
    backgroundColor: color.white,
    borderBottom: `1px solid ${color.linkWater}`,
  },
};

export const layoutTheme = {
  // Center
  centerLayout: {
    width: "600px",
  },
};
