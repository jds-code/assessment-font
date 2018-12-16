# Assessment Front

This app has been coded with following tools:

* [mithril] - Mithril JS
* [ramda] - Ramda
* [webpack] - Webpack
* [babel] - Babel
* [sass] - Sass

# Features

  - Loads Brastlewark gnomes list
  - Displays gnomes personal data
  - Filter gnomes by name

You can also:
  - Run Webpack server with HotModuleReload for quickly development!
  - Generate distribution files to been served by another application like [nginx]

Browser targeting, transpiling and polyfills matched to:
```sh
"browsers": [
        "last 2 Edge versions",
        "ie >= 9",
        "Chrome >= 59",
        "FireFox >= 44",
        "Safari >= 7"
    ]
```



### Installation & Development

Install the dependencies and devDependencies.

```sh
$ cd assessment-front
$ npm install
```

For run a development server...

```sh
$ npm run dev
```

... verify the deployment by navigating to your server address in your preferred browser.

http://localhost:8080/#!/


To create /dist files ...

```sh
$ npm run build
```

### Todos

 - Application tests have not been coded.
 - Only tested on Chrome browser
 - Image cache
 - Pagination or infinite scroll behaviour
 - ...

License
----

MIT


   [mithril]: <https://mithril.js.org/>
   [ramda]: <https://ramdajs.com/>
   [webpack]: <https://webpack.js.org/>
   [babel]: <https://babeljs.io/>
   [sass]: <https://sass-lang.com/>
   [nginx]: <https://www.nginx.com/>
