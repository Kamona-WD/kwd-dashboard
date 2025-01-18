// src/plugins/tailwindcss/tailwindcss.cjs
var colors = require("tailwindcss/colors");
var plugin = require("tailwindcss/plugin");
var opts = {
  colorVars: {
    "--light": "#edf2f9",
    "--dark": "#152e4d",
    "--darker": "#12263f",
    //
    "--color-primary": "var(--color-cyan)",
    "--color-primary-50": "var(--color-cyan-50)",
    "--color-primary-100": "var(--color-cyan-100)",
    "--color-primary-light": "var(--color-cyan-light)",
    "--color-primary-lighter": "var(--color-cyan-lighter)",
    "--color-primary-dark": "var(--color-cyan-dark)",
    "--color-primary-darker": "var(--color-cyan-darker)",
    //
    "--color-green": "#16a34a",
    "--color-green-50": "#f0fdf4",
    "--color-green-100": "#dcfce7",
    "--color-green-light": "#22c55e",
    "--color-green-lighter": "#4ade80",
    "--color-green-dark": "#15803d",
    "--color-green-darker": "#166534",
    //
    "--color-blue": "#2563eb",
    "--color-blue-50": "#eff6ff",
    "--color-blue-100": "#dbeafe",
    "--color-blue-light": "#3b82f6",
    "--color-blue-lighter": "#60a5fa",
    "--color-blue-dark": "#1d4ed8",
    "--color-blue-darker": "#1e40af",
    //
    "--color-cyan": "#0891b2",
    "--color-cyan-50": "#ecfeff",
    "--color-cyan-100": "#cffafe",
    "--color-cyan-light": "#06b6d4",
    "--color-cyan-lighter": "#22d3ee",
    "--color-cyan-dark": "#0e7490",
    "--color-cyan-darker": "#155e75",
    //
    "--color-teal": "#0d9488",
    "--color-teal-50": "#f0fdfa",
    "--color-teal-100": "#ccfbf1",
    "--color-teal-light": "#14b8a6",
    "--color-teal-lighter": "#2dd4bf",
    "--color-teal-dark": "#0f766e",
    "--color-teal-darker": "#115e59",
    //
    "--color-fuchsia": "#c026d3",
    "--color-fuchsia-50": "#fdf4ff",
    "--color-fuchsia-100": "#fae8ff",
    "--color-fuchsia-light": "#d946ef",
    "--color-fuchsia-lighter": "#e879f9",
    "--color-fuchsia-dark": "#a21caf",
    "--color-fuchsia-darker": "#86198f",
    //
    "--color-violet": "#7c3aed",
    "--color-violet-50": "#f5f3ff",
    "--color-violet-100": "#ede9fe",
    "--color-violet-light": "#8b5cf6",
    "--color-violet-lighter": "#a78bfa",
    "--color-violet-dark": "#6d28d9",
    "--color-violet-darker": "#5b21b6"
  },
  colors: {
    light: "var(--light)",
    dark: "var(--dark)",
    darker: "var(--darker)",
    primary: {
      DEFAULT: "var(--color-primary)",
      50: "var(--color-primary-50)",
      100: "var(--color-primary-100)",
      light: "var(--color-primary-light)",
      lighter: "var(--color-primary-lighter)",
      dark: "var(--color-primary-dark)",
      darker: "var(--color-primary-darker)"
    },
    secondary: {
      DEFAULT: colors.fuchsia[600],
      50: colors.fuchsia[50],
      100: colors.fuchsia[100],
      light: colors.fuchsia[500],
      lighter: colors.fuchsia[400],
      dark: colors.fuchsia[700],
      darker: colors.fuchsia[800]
    },
    success: {
      DEFAULT: colors.green[600],
      50: colors.green[50],
      100: colors.green[100],
      light: colors.green[500],
      lighter: colors.green[400],
      dark: colors.green[700],
      darker: colors.green[800]
    },
    warning: {
      DEFAULT: colors.orange[600],
      50: colors.orange[50],
      100: colors.orange[100],
      light: colors.orange[500],
      lighter: colors.orange[400],
      dark: colors.orange[700],
      darker: colors.orange[800]
    },
    danger: {
      DEFAULT: colors.red[600],
      50: colors.red[50],
      100: colors.red[100],
      light: colors.red[500],
      lighter: colors.red[400],
      dark: colors.red[700],
      darker: colors.red[800]
    },
    info: {
      DEFAULT: colors.cyan[600],
      50: colors.cyan[50],
      100: colors.cyan[100],
      light: colors.cyan[500],
      lighter: colors.cyan[400],
      dark: colors.cyan[700],
      darker: colors.cyan[800]
    }
  }
};
module.exports = plugin.withOptions(
  function(options = {}) {
    const { colorVars = opts.colorVars } = options;
    return function({ addBase }) {
      addBase({
        [[":root"]]: colorVars
      });
    };
  },
  function(options = {}) {
    const {
      lightColor = opts.colors.light,
      darkColor = opts.colors.dark,
      darkerColor = opts.colors.darker,
      primaryColors = opts.colors.primary,
      secondaryColors = opts.colors.secondary,
      successColors = opts.colors.success,
      warningColors = opts.colors.warning,
      dangerColors = opts.colors.danger,
      infoColors = opts.colors.info
    } = options;
    return {
      theme: {
        extend: {
          colors: {
            light: lightColor,
            dark: darkColor,
            darker: darkerColor,
            primary: primaryColors,
            secondary: secondaryColors,
            success: successColors,
            warning: warningColors,
            danger: dangerColors,
            info: infoColors
          }
        }
      }
    };
  }
);
