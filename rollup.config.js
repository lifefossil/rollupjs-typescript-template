import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

export default defineConfig([
  {
    input: 'src/main.ts',
    output: {
      file: 'bin/main.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      })
    ]
  }
])
