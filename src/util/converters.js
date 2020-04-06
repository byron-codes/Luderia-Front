export function doubleToReal(value = 0) {
  value = value === "" ? 0 : value;
  return "R$" + value.toFixed(2).toString().replace(".", ",");
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
