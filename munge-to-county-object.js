const dailyReportsByCounty = require('./data-by-county.json')

const byCounty = dailyReportsByCounty.reduce((result, dailyReport) => {
  result[dailyReport.countyName] = result[dailyReport.countyName] || { dailyReports: [] }
  result[dailyReport.countyName].dailyReports.push(dailyReport);
  return result;
})

console.log(byCounty);