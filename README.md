# How to run this nextjs app locally

1. Clone this repo and cd into it.

```bash

git clone <githublink>

cd joblist-for-jobbatical

```

2. Install all dependencies

```bash

npm install

```

3. add the env variables

  a) create a file .env.local in the root directory
  b) add this variable GRAPHQL_URL=https://api.graphql.jobs/ 
  c) save everything

4. Run the app

```bash

// development server

npx next dev

// build and start the app on port 3000

npx next build
npx next start

```
