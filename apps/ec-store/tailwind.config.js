const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
      
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(
      __dirname,
      '../cart/{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      '../member/{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
