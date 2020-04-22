export function doubleToReal(value = 0) {
  debugger
  value = value === "" ? 0 : value;
  value = value.toString().split(".");
  value[1] = value[1] ? (value[1].toString().length == 1 ? `${value[1]}0` : `${value[1].charAt(0)}${value[1].charAt(1)}`) : "00";
  return `R$ ${value[0]},${value[1]}`
}

export function convertDate(date, br = false, time = false) {
  if (!date) {
    return "";
  }
  let dateTime = date.split("T");
  date = dateTime[0];
  let converted = date.split(/\D/g);
  let final = "";
  br
    ? (final = [converted[2], converted[1], converted[0]].join("/"))
    : (final = [converted[0], converted[1], converted[2]].join("-"));
  return time ? final + " " + dateTime[1] : final;
}
