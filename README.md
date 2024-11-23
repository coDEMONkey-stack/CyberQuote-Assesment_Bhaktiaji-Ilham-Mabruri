<div align="center"><strong>This document serves as an assessment for a job application as Frontend Developer at CyberQuote Indonesia (PMA company in Indonesia. A member of CyberQuote Group of Singapore). <br/> Developed by Bhaktiaji Ilham.</strong></div>

<div align="center">Built with the NuxtJs TypeScript Tailwind</div>

<div align="center"><a href="#">Demo</a></div>


## Overview

Frontend Stack:

- Framework - [Nuxt 3](https://v3.nuxtjs.org/)
- Language - [TypeScript](https://www.typescriptlang.org/)
- UI Components - [Nuxt Content v2](https://content.nuxtjs.org/)
- Styling - [Tailwind CSS](https://tailwindcss.com/)
- Icons - [Nuxt Icon](https://github.com/nuxt-modules/icon)
- State management - [Pinia](https://pinia.vuejs.org/)
- HTTP Requests - [Axios](https://axios-http.com/)
- Easy form validation - [vee-validate](https://vee-validate.logaretm.com/v4/)
- Custom authentication store - [`useAuthStore`](./stores/auth.ts)
- Internationalization - [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/)
- Modular - [Nuxt Layer](https://nuxt.com/docs/getting-started/layers)


## Pages

1. [Login]: Authentication with Pinia & Axios. Simply use userID 97 to log in. Any userID can be found at [https://jsonplaceholder.typicode.com/users/](https://jsonplaceholder.typicode.com/users/).

2. [Dashboard]: User summary, with data extracted from the API at [https://jsonplaceholder.typicode.com/users/](https://jsonplaceholder.typicode.com/users/).

3. [VIP]: A page that informs users with a userID above 5 are VIPs.

4. [Not-VIP]: A page that informs users who are not VIPs.


## Getting Started

- First, run `npm install` to install all dependencies.
- Then, run `npm run dev` to start the development server.
- Alternatively, you can run `npm run build` to build the project for deployment purposes.