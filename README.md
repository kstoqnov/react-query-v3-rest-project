# React Query Example

This project is a demonstration of how to use [React Query](https://react-query.tanstack.com) library to perform the following frontend API requests:

- Basic query
- Paginated query
- Infinite query
- Create, Update and Delete requests

This demo project is setup with:

- [Vite](https://vitejs.dev/): A very fast build tool
- [WindiCSS](https://windicss.org/): A very fast Tailwind CSS compiler
- [React Hook Form](https://react-hook-form.com/): Form builder and validation library
- [React Modal](http://reactcommunity.org/react-modal/): An accessible modal component
- [Axios](https://github.com/axios/axios): Promised based HTTP client for browsers
- [JSON Server](https://github.com/typicode/json-server): Full fake REST API server

## Feature 
- typescript support, next.js, grpc-web

## Run Locally

Clone the project

Go to the project directory

Install dependencies

```bash
npm install
```

Setup database file

```bash
cp api/sample.db.json api/db.json
```

Start the `json-server`

```bash
npm run server
```

Launch another terminal and start the Vite server

```bash
npm run dev
```

Head over to your browser and open the URL <http://localhost:3000> to access the application.