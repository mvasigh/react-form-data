import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'useFormData.js',
  output: {
    name: 'use-form-data',
    file: 'dist/react-form-data.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: ['react']
};
