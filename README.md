# Astro Portfolio

To start localy:

```
yarn install && yarn dev
```

To start with Docker:

1. Build container by running the following command in project’s root directory:

```
docker build -t <your-astro-image-name> .
```

2. To run image as a local container, use the following command:

```
docker run -p <local-port>:<container-port> <your-astro-image-name>
```

3. Now that website is successfully built and packaged in a container, you can deploy it to a cloud provider.

Features:

- ✅ Clean design
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap
- ✅ RSS Feed
- ✅ Markdown/MDX

## 🚀 Project Structure

Inside of project, you'll see the following folders and files:

```
├── .github/
├── .vscode/
├── nginx/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── data.ts
│   └── env.d.ts
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── astro-imagetools.config.mjs
├── astro.config.ts
├── Dockerfile
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`                 | Starts local dev server at `localhost:3000`      |
| `yarn build`               | Build your production site to `./dist/`          |
| `yarn preview`             | Preview your build locally, before deploying     |
| `yarn lint`                | Validate project files                           |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro -- --help` | Get help using the Astro CLI                     |

P.S. Have fun 😎
