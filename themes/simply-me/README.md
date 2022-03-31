# Up and running

You shoud have installed TailwindCSS CLI. Details can be found [here](https://tailwindcss.com/docs/installation)

To build assets and watch:

```bash
npx tailwindcss -i ./src/style.css -o ./dist/output.css --watch
```

To build and minify assets run:

```bash
npx tailwindcss -o ./dist/output.css --minify
```
