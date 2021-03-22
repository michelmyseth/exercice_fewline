import moment from "moment";
// Code here

function formatDate(date){
  return (moment(date).format("dddd Do MMMM YYYY"));
}

function yearsSinceDate(date){
  return 2021 - parseInt(moment(date).format("YYYY") );

}
function getDayFromDate(date){
  return moment(date).format("dddd");
}
function daysSinceDate(date){
  console.log(moment(date).format("dddd Do YYYY"));
}



export {formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };