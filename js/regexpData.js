// format YYYY-MM-dd
const dateRegexp = /(\d{4})-(\d{2})-(\d{2})/
const dateString = '2019-09-18'
let date

// checking format
if (dateString.match(dateRegexp)) {
  date = dateString.replace(dateRegexp, "$3-$2-$1")
}

console.log(date) // reformated date 18-09-2019
