/** @type {import('tailwindcss').Config} */
        module.exports = {
  "darkMode": "class",
  "content": [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  "safelist": [
    "gap-x-2",
    "gap-y-6",
    "pl-4",
    "flex-wrap",
    "mb-12",
    "basis-[10%]",
    {
      "pattern": {}
    }
  ],
  "presets": [
    null
  ],
  "important": "html",
  "theme": {
    "screens": {
      "base": "0",
      "xs": "400px",
      "sm": "480px",
      "md": "768px",
      "lg": "992px",
      "xl": "1280px"
    },
    "extend": {
      "colors": {
        "primary": {
          "0": "var(--color-primary-0)",
          "50": "var(--color-primary-50)",
          "100": "var(--color-primary-100)",
          "200": "var(--color-primary-200)",
          "300": "var(--color-primary-300)",
          "400": "var(--color-primary-400)",
          "500": "var(--color-primary-500)",
          "600": "var(--color-primary-600)",
          "700": "var(--color-primary-700)",
          "800": "var(--color-primary-800)",
          "900": "var(--color-primary-900)",
          "950": "var(--color-primary-950)"
        },
        "secondary": {
          "0": "var(--color-secondary-0)",
          "50": "var(--color-secondary-50)",
          "100": "var(--color-secondary-100)",
          "200": "var(--color-secondary-200)",
          "300": "var(--color-secondary-300)",
          "400": "var(--color-secondary-400)",
          "500": "var(--color-secondary-500)",
          "600": "var(--color-secondary-600)",
          "700": "var(--color-secondary-700)",
          "800": "var(--color-secondary-800)",
          "900": "var(--color-secondary-900)",
          "950": "var(--color-secondary-950)"
        },
        "tertiary": {
          "50": "var(--color-tertiary-50)",
          "100": "var(--color-tertiary-100)",
          "200": "var(--color-tertiary-200)",
          "300": "var(--color-tertiary-300)",
          "400": "var(--color-tertiary-400)",
          "500": "var(--color-tertiary-500)",
          "600": "var(--color-tertiary-600)",
          "700": "var(--color-tertiary-700)",
          "800": "var(--color-tertiary-800)",
          "900": "var(--color-tertiary-900)",
          "950": "var(--color-tertiary-950)"
        },
        "error": {
          "0": "var(--color-error-0)",
          "50": "var(--color-error-50)",
          "100": "var(--color-error-100)",
          "200": "var(--color-error-200)",
          "300": "var(--color-error-300)",
          "400": "var(--color-error-400)",
          "500": "var(--color-error-500)",
          "600": "var(--color-error-600)",
          "700": "var(--color-error-700)",
          "800": "var(--color-error-800)",
          "900": "var(--color-error-900)",
          "950": "var(--color-error-950)"
        },
        "success": {
          "0": "var(--color-success-0)",
          "50": "var(--color-success-50)",
          "100": "var(--color-success-100)",
          "200": "var(--color-success-200)",
          "300": "var(--color-success-300)",
          "400": "var(--color-success-400)",
          "500": "var(--color-success-500)",
          "600": "var(--color-success-600)",
          "700": "var(--color-success-700)",
          "800": "var(--color-success-800)",
          "900": "var(--color-success-900)",
          "950": "var(--color-success-950)"
        },
        "warning": {
          "0": "var(--color-warning-0)",
          "50": "var(--color-warning-50)",
          "100": "var(--color-warning-100)",
          "200": "var(--color-warning-200)",
          "300": "var(--color-warning-300)",
          "400": "var(--color-warning-400)",
          "500": "var(--color-warning-500)",
          "600": "var(--color-warning-600)",
          "700": "var(--color-warning-700)",
          "800": "var(--color-warning-800)",
          "900": "var(--color-warning-900)",
          "950": "var(--color-warning-950)"
        },
        "info": {
          "0": "var(--color-info-0)",
          "50": "var(--color-info-50)",
          "100": "var(--color-info-100)",
          "200": "var(--color-info-200)",
          "300": "var(--color-info-300)",
          "400": "var(--color-info-400)",
          "500": "var(--color-info-500)",
          "600": "var(--color-info-600)",
          "700": "var(--color-info-700)",
          "800": "var(--color-info-800)",
          "900": "var(--color-info-900)",
          "950": "var(--color-info-950)"
        },
        "typography": {
          "0": "var(--color-typography-0)",
          "50": "var(--color-typography-50)",
          "100": "var(--color-typography-100)",
          "200": "var(--color-typography-200)",
          "300": "var(--color-typography-300)",
          "400": "var(--color-typography-400)",
          "500": "var(--color-typography-500)",
          "600": "var(--color-typography-600)",
          "700": "var(--color-typography-700)",
          "800": "var(--color-typography-800)",
          "900": "var(--color-typography-900)",
          "950": "var(--color-typography-950)",
          "white": "#FFFFFF",
          "gray": "#D4D4D4",
          "black": "#181718"
        },
        "outline": {
          "0": "var(--color-outline-0)",
          "50": "var(--color-outline-50)",
          "100": "var(--color-outline-100)",
          "200": "var(--color-outline-200)",
          "300": "var(--color-outline-300)",
          "400": "var(--color-outline-400)",
          "500": "var(--color-outline-500)",
          "600": "var(--color-outline-600)",
          "700": "var(--color-outline-700)",
          "800": "var(--color-outline-800)",
          "900": "var(--color-outline-900)",
          "950": "var(--color-outline-950)"
        },
        "background": {
          "0": "var(--color-background-0)",
          "50": "var(--color-background-50)",
          "100": "var(--color-background-100)",
          "200": "var(--color-background-200)",
          "300": "var(--color-background-300)",
          "400": "var(--color-background-400)",
          "500": "var(--color-background-500)",
          "600": "var(--color-background-600)",
          "700": "var(--color-background-700)",
          "800": "var(--color-background-800)",
          "900": "var(--color-background-900)",
          "950": "var(--color-background-950)",
          "error": "var(--color-background-error)",
          "warning": "var(--color-background-warning)",
          "muted": "var(--color-background-muted)",
          "success": "var(--color-background-success)",
          "info": "var(--color-background-info)",
          "light": "#FBFBFB",
          "dark": "#181719"
        },
        "border": {
          "0": "var(--color-border-0)",
          "50": "var(--color-border-50)",
          "100": "var(--color-border-100)",
          "200": "var(--color-border-200)",
          "300": "var(--color-border-300)",
          "400": "var(--color-border-400)",
          "500": "var(--color-border-500)",
          "600": "var(--color-border-600)",
          "700": "var(--color-border-700)",
          "800": "var(--color-border-800)",
          "900": "var(--color-border-900)",
          "950": "var(--color-border-950)",
          "error": "var(--color-border-error)",
          "warning": "var(--color-border-warning)",
          "muted": "var(--color-border-muted)",
          "success": "var(--color-border-success)",
          "info": "var(--color-border-info)",
          "light": "#FBFBFB",
          "dark": "#181719"
        }
      },
      "fontFamily": {
        "roboto": [
          "Roboto",
          "sans-serif"
        ]
      },
      "fontWeight": {
        "hairline": "100",
        "extraBlack": "950"
      },
      "fontSize": {
        "2xs": "10px"
      },
      "border": {
        "2": "2px"
      }
    },
    "plugins": []
  }
}