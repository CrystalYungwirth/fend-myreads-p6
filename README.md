# MyReads

## Table of Contents
* [Overview](#overview)
* [View Page](#view-page)
* [Dependencies](#dependencies)
* [Resources](#resources)
* [Browsers Support](#browsers-support)
* [Contributions](#contributions)
* [License](#license)
* [Udacity README](#udacity-readme) file from starter code

## Overview
This project was completed for the Udacity 2018 US Grow with Google Scholarship, as project 6. It is a hypothetical bookshelf where a user can monitor which books they are reading, want to read, and completed. They can also add new books to their collection.

My project needs a lot of work in the future. I wasn't able to successfully separate all components, such as bookshelf books. I wasn't able to modify the approach for the searh page from class into a working version for this project. I think it was a placement issue, it would only filter the books already in my bookshelf. Since I'm behind, I opted to use a walkthrough from a prior student and try to improve her method. 

A few times, whenever I'd get errors, it was recommended by the console to setup Error Boundary. Seemed straight forward! Couldn't get it to work. I do want to put that in in the future. 

## View Page
### Online
Not available at this time. Intent is to integrate (react-gh-pages)[https://github.com/gitname/react-gh-pages] in the future.

### localhost
  1) ```clone https://github.com/CrystalYungwirth/fend-myreads-p6.git```
  2) ```cd fend-myreads-p6```
  3) ```npm i```
  4) ```npm start```
  
  App will be shown on localhost:3000

## Dependencies
 * [react-image](https://www.npmjs.com/package/react-image)
 * [prop-types](https://www.npmjs.com/package/prop-types)
 * [react-dom-router](https://www.npmjs.com/package/react-router-dom)

## Resources
 * I used the [Maeva](https://www.youtube.com/watch?v=i6L2jLHV9j8&t=10558s) walkthrough for help with the search page. 

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last 10 versions| last 10 versions| last 10 versions| last 10 versions


## Contributions
I would be interested in reviewing any recommendations, especially related to the areas mentioned in the [Overview](#overview). However, I won't be able to merge requests until after October when I finish the nanodegree program.

## License
[MIT License](LICENSE)


## Udacity README
# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
