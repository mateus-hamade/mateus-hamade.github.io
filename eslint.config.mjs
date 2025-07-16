import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "max-depth": ["error", { "max": 2 }],
      "no-unused-vars": ["off"],
      "quotes": ["error", "double"],
      "padding-line-between-statements": ["error", { blankLine: "never", prev: "function", next: "function" }],
      "max-len": ["error", 120],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "semi": ["error", "never"],
      "eqeqeq": ["error", "always"],
      "no-warning-comments": ["error"],
      "jsx-quotes": ["error", "prefer-double"],
      "react/jsx-max-depth": ["error", { "max": 6 }],
      "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
      "react/jsx-max-props-per-line": ["error", { "maximum": 1 }]
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_"
        }
      ]
    }
  }
]

export default config