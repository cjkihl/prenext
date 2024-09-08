# PreNext

PreNext is a precompiler for Next.js configuration files, solving the TypeScript compatibility issue with `next.config.mjs`.

## The Problem

Next.js configuration files (`next.config.mjs`) are executed before the compilation process, which means you can't use TypeScript directly in these files. Additionally, compiling `next.config.mjs` at runtime is not ideal as it runs on every server start, potentially impacting performance.

## The Solution

PreNext is a build-time precompiler that allows you to write your Next.js configuration in TypeScript and compile it to JavaScript before your Next.js build process.

## Installation

Install PreNext as a dev dependency:

```bash
npm install -D prenext
```

## How to Use

1. Rename your `next.config.mjs` to `next.config.ts`:

   ```bash
   mv next.config.mjs next.config.ts
   ```
2. Add `next.config.mjs` to your `.gitignore` file

   ```bash
   echo "next.config.mjs" >> .gitignore
   ```

3. Add `prenext` to your build process by modifying your `package.json` scripts:

   ```json
   "scripts": {
     "dev": "prenext && next dev",
     "build": "prenext && next build"
   }
   ```

4. Run `npm run build` or `npm run dev` to compile your `next.config.ts` to `next.config.mjs`
