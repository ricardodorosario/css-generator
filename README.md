# sass-webpack-generator

Sass generator with Webpack

## Execution sequence:

Installing the dependencies:

```
npm install
```

Starting the style.css inline generator

```
npm run start:watch
```

Starting the html example on port 3000

```
npm run start
```

Generating the style.min.css file

```
npm run build
```

## Where are the files?

Put the scss files here: ./app/scss/

Put a style.scss file (required) in the directory above

The html example is here: ./app/test/

The style.css inline will be created here: ./app/test/css/

After you build your project, the style.min.css will be here: ./dist/

