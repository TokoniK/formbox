//format date in preparation for http request body
export const formatDateString = (datstring: string) => {
  var dt = datstring.split(".");
  var converted = dt.length === 2 ? dt[0] + "Z" : dt[0];
  // var converted = datstring.replace(".000", "Z");
  converted =
    converted.split(":").length === 2 ? converted + ":00Z" : converted;
  return converted;
};

//parse date from http response to Datestring for date pickers
export const parseDate = (date: Date): string => {
  return date.toISOString().replace("Z", "");
};

export function formatCurrency(value?: string) {
  if (!value) {
    return "";
  }
  var res = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (res.indexOf(".") > 0) {
    var sArr = res.split(".");
    res = sArr[0] + "." + sArr[1].replace(/[^.\d]/g, "");
  }
  return res;
}

export function parseCurrency(value?: string) {
  if (!value) {
    return "";
  }
  var res = value!.replace(/[^.\d]/g, "");
  if (res.indexOf(".") > 0) {
    res = parseFloat(res).toFixed(2);
  }
  return res;
}
