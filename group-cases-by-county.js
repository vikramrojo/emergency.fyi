
const fs = require('fs');
const moment = require('moment');
const parse = require('csv-parse/lib/sync')




const RIGHT_NOW = moment();
const SEVEN_DAYS_AGO = RIGHT_NOW.clone().subtract(7, 'days').startOf('day');

const rollupStats = (county) => {
  county.totalDeaths = county.dailyReports.reduce(sum('deaths'), 0)
  county.totalCases = county.dailyReports.reduce(sum('cases'), 0)
  county.recentReports = county.dailyReports.filter((dailyReport) => (
    dailyReport.date.isSameOrAfter(SEVEN_DAYS_AGO)
  ))
}


const sum = (field) => (
  (result, object) => result + parseInt(object[field])
)

const loadDailyReportsFromCSV = () => {
  const raw = fs.readFileSync('./cases-by-date-and-county.csv')

  const records = parse(raw, {
    columns: true,
    skip_empty_lines: true
  })

  return records;
}

const countySlug = (dailyReport) => (
  `${dailyReport.county}, ${dailyReport.state}`
)

const mergeDailyReportIntoCounty = (county, dailyReport) => {
  county.state = dailyReport.state;
  county.county = dailyReport.county;
  county.fips = dailyReport.fips;
  if(typeof dailyReport === 'undefined') { return }
  county.dailyReports.push(dailyReport);
}


const cleanDailyReportData = (dailyReport) => {
  delete dailyReport.state;
  delete dailyReport.county;
  delete dailyReport.fips;
  dailyReport.cases = parseInt(dailyReport.cases);
  dailyReport.deaths = parseInt(dailyReport.deaths);
  dailyReport.date = moment(dailyReport.date)
}

const csvToCounties = (result, dailyReport) => {
  const slug = countySlug(dailyReport);
  result[slug] = result[slug] || { dailyReports: [] }

  mergeDailyReportIntoCounty(result[slug], dailyReport)
  cleanDailyReportData(dailyReport)
  return result;
}


const records = loadDailyReportsFromCSV()
const counties = records.reduce(csvToCounties, {})


Object.values(counties).forEach(rollupStats)


console.log(JSON.stringify(counties, null, 2));
