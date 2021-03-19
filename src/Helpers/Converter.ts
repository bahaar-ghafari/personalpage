// import moment from "moment";

export const PxToRemOrEmConverter = (value: number, type: 'em' | 'rem'): string => {
  return `${value / 16}${type}`
}
// export const dateFormatter = (value: Date) => {
//   return moment(value).format("h:mm a,D MMM,YYYY");
// };
// export const getDate = (value: Date) => {
//   return moment(value).format("h:mm a");
// };
// export const getTime = (value: Date) => {
//   return moment(value).format("YYYY MMM D");
// };