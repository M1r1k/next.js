[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/custom-client-chunks)

# Custom client chunks example

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example custom-client-chunks custom-client-chunks-app
# or
yarn create next-app --example custom-client-chunks custom-client-chunks-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/custom-client-chunks
cd custom-client-chunks
```

Install it

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## The idea behind the example

Example of manual grouping of modules from particular pages into custom common chunks
