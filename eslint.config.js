import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "src/docs/assets/docs-content.js",
      "src/docs/assets/docs.js",
      "**/*.min.js",
      "**/*.min.css"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname
      },
      globals: {
        Buffer: "readonly",
        URL: "readonly",
        console: "readonly",
        process: "readonly",
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        fetch: "readonly",
        HTMLElement: "readonly",
        Element: "readonly",
        Node: "readonly",
        NodeList: "readonly",
        Event: "readonly",
        PointerEvent: "readonly",
        KeyboardEvent: "readonly",
        EventListener: "readonly",
        EventListenerOrEventListenerObject: "readonly",
        CustomEvent: "readonly",
        EventTarget: "readonly",
        HTMLButtonElement: "readonly",
        HTMLAnchorElement: "readonly",
        ParentNode: "readonly",
        Document: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off"
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      unicorn
    },
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true
          }
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/no-explicit-any": "error"
    }
  },
  prettier
);
