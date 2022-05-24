# Interior Design Website

The Official Documentation Website for Jawnchuks

## Project Code Libraries

- Tailwind CSS (CSS UI Framework)
- Next.js (The React Framework for Production)
- Framer-motion (React-based animation library)

## Project Preamble

The offical package manager for this project is **yarn**.

## Project Setup

> Run these commands in order in which they appear below.

```bash

# clone this repo to local machine
# git clone (repo link here)

# install dependencies
yarn install


# build the project
$ yarn build

# start the project locally and load in a browser
$ yarn dev

```

## Project Folder Structure/Organization

- `src/`: The bulk of business logic for CMS resides in this folder

  - `src/components`: The logic for self-contained custom UI artifacts resides here
  - `src/pages/`: The logic for all the pages of the application resides here

  - `src/libs/`: The logic for reusable helper routines and utilities reside here
  - `src/assets/`: The static binary/text assets used in the UI of this app resides here
  - `src/styles/`: The CSS rule/ruleset declarations for this app resides here

- `public/`: The bulk of logic and JSON/CSS/JS/IMAGE static assets delivered to the front-end (web) reside here

## Project Tech Stack

- Vercel ( Hosting Service : **Production** )
- next-js v12.1.0 ( React framework )

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
