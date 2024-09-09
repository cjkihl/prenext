# PreNext 🚀

PreNext is a precompiler for Next.js configuration files, solving the TypeScript compatibility issue with `next.config.mjs`. 🛠️

## The Problem 😕

Next.js configuration files (`next.config.mjs`) are executed before the compilation process, which means you can't use TypeScript directly in these files. Additionally, compiling `next.config.mjs` at runtime is not ideal as it runs on every server start, including every cold-start in serverless environments like vercel. This can potentially impact performance. ⏱️ See this [issue](https://github.com/vercel/next.js/issues/5318#issuecomment-540530085) for more details.

## The Solution 💡

PreNext is a build-time precompiler that allows you to write your Next.js configuration in TypeScript and compile it to JavaScript before your Next.js build process. 🎉

## Installation 📦

1. Install PreNext as a dev dependency:

   ```bash
   npm install -D prenext
   ```

2. Run this command to convert your `next.config.mjs` to `next.config.ts`:

   ```bash
   # copy next.config.mjs to next.config.ts
   cp next.config.mjs next.config.ts

   # remove next.config.mjs
   rm next.config.mjs

   # add next.config.mjs to .gitignore
   echo "next.config.mjs" >> .gitignore

   # commit the changes
   git add next.config.ts next.config.mjs .gitignore
   git commit -m "Add prenext"
   ```

3. Add `prenext` to your build process by modifying your `package.json` scripts:

   ```json
   "scripts": {
     "dev": "prenext && next dev",
     "build": "prenext && next build"
   }
   ```

4. Run `npm run build` or `npm run dev` to compile your `next.config.ts` to `next.config.mjs`

## How it works 🛠️

PreNext uses esbuild to compile and bundle your `next.config.ts`. This is done during the a pre-build process so your `next.config.mjs` is compiled in your CI/CD pipeline instead of on every server start. ⚡️

### Why not use only tsc directly? 🤔

`tsc` is a TypeScript compiler, but it is not a bundler. The bundling step is necessary to convert all your TypeScript modules into a single JavaScript file (next.config.mjs). In this way you can import other typescript modules in your `next.config.ts` file as well. 📦

## Contributing 🤝

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for more details. 🌟

