import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['.next/*', 'node_modules/*'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Desactiva la regla
    },
    settings: {
      react: {
        version: 'detect', // Auto detecta la versión de React
      },
    },
  },
  {
    files: ['src/__tests__/**/*.{js,jsx,ts,tsx}'], // Ajusta según tus archivos de prueba
    ignores: ['.next/*', 'node_modules/*'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Desactiva la regla para archivos de prueba
    },
    settings: {
      react: {
        version: 'detect', // Auto detecta la versión de React
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]
