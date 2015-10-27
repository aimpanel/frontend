##About

Aimpanel is simple to use game hosting panel.
More info @ http://aimpanel.pro

This repo contains only frontend - look and feel for panel.
Clone it and mod it if you want to create your own branding.

This project uses Vue.js 0.12, Webpack, Materialize CSS, JWT (JSON Web Tokens) and many more.

All pull requests are highly welcome, especially new translations :)

###License 

MIT

##Howto

### Run

To run developer mode just execute this on Ubuntu 15.04 or similar

``` bash
npm install #run it only first time
npm run dev
```

If you don't have node.js just run

```bash
sudo apt-get install nodejs npm
```

### Add translation

Let's say we want to support xx language.

1. Copy `src/locales/en.js` to `src/locales/xx.js`
2. Make modifications to `src/locales/xx.js`
3. Send pull request
4. Let me do the rest :)

