import js from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import jsxA11y from 'eslint-plugin-jsx-a11y';  
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended, 
  reactRecommended,  
  jsxA11y.flatConfigs.recommended, 
  {
    plugins: {
      'react-hooks': reactHooks,  
    },
    languageOptions: {
      globals: {
        browser: true 
      }
    },
    rules: {

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'semi': ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      "react/prop-types": "off"
    },
    files: ['**/*.{js,jsx,ts,tsx}']  
  }
];