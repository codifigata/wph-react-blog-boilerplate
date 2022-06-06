# WordPress Headless: React Blog

This is a simple boilerplate to give you a quick start with WordPress REST API.

Use it as you like, make it the starting point to an awesome and stylish blog, or if you prefer just use it for quickly prototyping.

**Quick note:** this boilerplate is not meant to be used on production environment as is, because it's not SEO friendly.


## Features

- Home page with most recent posts
- Single post page with basic data
- HTML entity decoded
- HTML tags parsed
- Dark / Light mode with toggle
- Responsive

## Technologies used

- React.js 18+
- Vite.js
- WordPress REST API 
- TailwindCSS v3+

## Run Locally

Clone the project

```bash
  git clone https://github.com/codifigata/wph-react-blog-boilerplate.git
```

Go to the project directory

```bash
  cd wph-react-blog-boilerplate
```

Install dependencies

```bash
  npm install
```

Edit SITE_URL and SITE_NAME constants in src/config/index.js file

```bash
  export const SITE_URL = "https://www.example.com"; # Replace "https://www.example.com" with your own domain
  export const SITE_NAME = "Example"; # Replace "Example" with your own Blog name, this will be used on Header and Footer components
```

Start the server

```bash
  npm run dev
```


## Author

- [@fcampusdev](https://github.com/fcampus)

