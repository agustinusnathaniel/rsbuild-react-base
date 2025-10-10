import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.tsx'],
  project: ['src/**/*.{ts,tsx,js,jsx,css,scss}'],
  ignore: ['src/**/*.gen.ts'],
};

export default config;
