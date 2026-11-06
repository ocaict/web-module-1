const moment = require('moment');

const formatDate = (date) => {
  return moment(date).format('DD-MM-YYYY');
}   



console.log(formatDate(new Date()));