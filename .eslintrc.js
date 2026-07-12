module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "dm-plugin",
    "unused-imports",
    "simple-import-sort",
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "no-unused-expressions": "warn",
    "react/destructuring-assignment": "warn",
    "object-curly-spacing": ["error", "always"],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "warn",
    "react/jsx-pascal-case": "warn",
    "react/jsx-props-no-spreading": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": "off",
    // 'i18next/no-literal-string': [
    //     'error',
    //     {
    //         markupOnly: true,
    //         ignoreAttribute: [
    //             'children',
    //             'as',
    //             'role',
    //             'data-testid',
    //             'to',
    //             'target',
    //             'justify',
    //             'align',
    //             'border',
    //             'direction',
    //             'gap',
    //             'feature',
    //             'color',
    //             'variant',
    //             'theme',
    //             'size',
    //             'wrap',
    //         ],
    //     },
    // ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react$", "^[a-z]"],
          ["^@(?![\\/])[a-zA-ZА-Яа-яёЁ]"],
          ["^@/app/"],
          ["^@/shared/ui"],
          [
            "^@/shared/lib",
            "^@/shared/const",
            "^@/shared/config",
            "^@/shared/assets",
            "^@/shared/types",
          ],
          ["^@/entities/"],
          ["^@/features/", "^@/widgets/"],
          ["^~"],
          ["^../../../"],
          ["^../../"],
          ["^../"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*)/", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "max-len": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn",
    // Checks effect dependencies,
    "no-param-reassign": "off",
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "dm-plugin/path-checker": [
      "error",
      {
        alias: "@",
      },
    ],
    "dm-plugin/layer-imports": [
      "error",
      {
        alias: "@",
        ignoreImportPatterns: ["**/StoreProvider", "**/testing", "**/mock"],
      },
    ],
    "dm-plugin/public-api-imports": [
      "error",
      {
        alias: "@",
        publicApiImports: [
          {
            testing: {
              filePatterns: [
                "**/*.test.*",
                "**/*.stories.*",
                "**/StoreDecorator.tsx",
              ],
            },
          },
          {
            mock: {
              filePatterns: [
                "**/*.test.*",
                "**/*.stories.*",
                "**/StoreDecorator.tsx",
              ],
            },
          },
        ],
      },
    ],
    "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
    "react/no-unstable-nested-components": "warn",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
  ],
};
