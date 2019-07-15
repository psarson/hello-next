# hello-next 


## Sources: 

  https://nextjs.org/learn/basics/deploying-a-nextjs-app/build-and-start

  
  https://zeit.co/guides/deploying-nextjs-with-now/



From `scripts` in `package.json`:

      "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
      }

## First:

We need to build our Next.js app for production. It will produce an optimized set of code for production:

      npm run build

Terminal:

      Creating an optimized production build ...

      Compiled successfully.

      Page            Size     Files  Packages
      ┌ ⚡ /           14.1 kB      2         4
      ├   /_app       2.39 kB      0         4
      ├   /_document
      ├   /_error     8.45 kB      0         4
      ├ ⚡ /about      425 B        2         4
      └ ⚡ /p/[id]     77.2 kB      2        42

      σ  (Server)       page will be server rendered (i.e. getInitialProps)
      ⚡  (Static File)  page was prerendered as static HTML

## Second

    You need to start your Next.js app on a port. That will do server side rendering and serve pages (built with the above command).

    For that, now run the start script:

        npm run start

    Terminal:

        > Ready on http://localhost:3000

# Run Two Instances:

Now we are going to run two instances of our app. Usually, we do this to horizontally scale our app.

## First

    replace the scripts of our package.json with the following:

      "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start -p $PORT"
      }

    We changed the start script and it now accepts a port to start the app on.

## Second

Build the App:

      npm run build

Terminal:  
 Creating an optimized production build ...

    Compiled successfully.

    Page            Size     Files  Packages
    ┌ ⚡ /           14.1 kB      2         4
    ├   /_app       2.39 kB      0         4
    ├   /_document
    ├   /_error     8.45 kB      0         4
    ├ ⚡ /about      426 B        2         4
    └ ⚡ /p/[id]     77.2 kB      2        42

    σ  (Server)       page will be server rendered (i.e. getInitialProps)
    ⚡  (Static File)  page was prerendered as static HTML

## Third

Try to run the following commands, one by one (two sessions), in their own terminal:

      PORT=8000 npm start
      PORT=9000 npm start

Terminal 1

      > Ready on http://localhost:8000

Terminal 2

      > Ready on http://localhost:9000
