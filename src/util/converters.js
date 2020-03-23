export function doubleToReal(value = 0) {
  return "R$" + value.toFixed(2).toString().replace(".", ",");
}

export function convertDate(date, br) {
  if (!date) {
    return "";
  }
  var converted = date.split(/\D/g);
  return br
    ? [converted[2], converted[1], converted[0]].join("/")
    : [converted[0], converted[1], converted[2]].join("-");
}
