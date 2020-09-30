# Blog Project

A clean and simple blog app built with React. Users can create, edit, and delete posts, which are arranged chronologically newest-first. 

## Introduction

While studying [React - The Complete Guide by Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/), I decided to apply what I learned about conditional rendering and HTTP requests using axios. About a month and a half later, I completed this app.

## Project Status

The app's minimum-viable-product is completed, and can be viewed on [GitHub Pages](https://dylanhamada.github.io/blog-project/).

## Technologies

- React
    - Context API
- axios
- Moment.js
- Firebase Real Time Database

## Installation and Instructions

The app itself is fairly self-explanatory. Any user can create, edit, and delete posts. There is no user authentication, and the Firebase database is freely accessible.

To install:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/blog-project`

## Reflection

I'm very proud of what I accomplished, given that this is the most complex React app I've built to date. It may not look like it from the outside, but this took hours and hours of work, including countless moments of referring back to video and written tutorials, scratching my head cluelessly, and sleeping on a problem only to wake up the next morning with the solution.

Here are some of the pitfalls common to new React developers that I fell into:

- Repeating app logic in multiple components instead of extracting it to a common method
- Having trouble piping state to various nested components
- Making clean HTTP requests without `.then` calls nested to the center of the Earth
- CSS fine-tuning

Some of these problems were mitigated, and some of them are still present in the MVP.

I feel that this app as an MVP is complete, and want to move on to my next project. However, I will revisit this app in the future, and make the following upgrades:

- Use async/await instead of nested HTTP requests
- Manage state with Redux
- Implement draft.js for rich-text input
- Image and video upload
- User authentication
- Search functionality