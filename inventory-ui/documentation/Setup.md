# Installations

### Project Setup

1. Create frontend project using `npm create vite@latest`
2. Get rid of extra file such as App.css, code inside App.tsx, react.svg and vite.svg
3. Setup Tailwind CSS using this [link](https://tailwindcss.com/docs/guides/vite)

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Install Headless UI library `npm install @headlessui/react@latest`
5. Install prettier `npm install --save-dev --save-exact prettier` and create .prettierrc.json and add following rules:

```
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "arrowParens": "avoid"
}

```

create .vscode/settings.json and add below content

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}

```

Follow [this](https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs) blog for more details on eslint and prettier setup

6. Testing Setup

```
npm install vitest --save-dev
npm install jsdom --save-dev

vitest.config.ts

test:{environment:"jsdom"}

npm install @testing-library/react @testing-library/jest-dom --save-dev
```

add below to tsconfig under compiler options and also add setup file to tsconfig include

```
 "types": ["@testing-library/jest-dom"]
```
