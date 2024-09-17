module.exports = {
  parser: '@typescript-eslint/parser',    // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended',                 // Basic ESLint recommended settings
    'plugin:@typescript-eslint/recommended', // TypeScript specific linting
    'plugin:react/recommended',           // React specific linting
    'plugin:jsx-a11y/recommended',        // Accessibility checks
    'plugin:import/recommended',          // Import/export syntax
    'plugin:react-hooks/recommended',     // React hooks linting rules
    'airbnb',                             // Airbnb's popular JavaScript/React style guide
    'prettier',                           // Disable any rules that would conflict with Prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,                          // Enables JSX since you're using React
    },
    ecmaVersion: 'latest',                // Latest ECMAScript features
    sourceType: 'module',                 // Enables ES6 modules
  },
  plugins: [
    '@typescript-eslint',                 // TypeScript specific linting rules
    'react',
    'jsx-a11y',
    'import',
    'prettier',                           // Prettier integration
  ],
  rules: {
    'prettier/prettier': ['error', {      // Enforces Prettier formatting rules
      singleQuote: true,
      trailingComma: 'es5',
      arrowParens: 'avoid',
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // Allows JSX in .tsx files
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never', js: 'never', jsx: 'never' },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'], // TypeScript-specific rule for unused variables
    'react/react-in-jsx-scope': 'off',   // Not needed for React 17+
    'jsx-a11y/anchor-is-valid': 'off',   // Allows Chakra UI’s Link component
  },
  settings: {
    react: {
      version: 'detect',                  // Automatically detects the version of React to use
    },
  },
};
