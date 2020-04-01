## Getting started

### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd emergency.fyi
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.

## Importing Cases

Download the cases from the new york times data source:
> `curl https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv > cases-by-date-and-county.csv `

Filter it down to todays cases, make sure to replace `2020-03-31` with todays date in YYYY-MM-DD format:
> `grep '2020-03-31' cases-by-date-and-county.csv > todays-cases.csv`

Then import todays cases on AirTable