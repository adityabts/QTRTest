let a = {
  machineid: "1",
  pid: "11",
  biometric_id: "1",
  value: "98",
  unit: "%",
  machine_timestamp: "20220203173700",
  storetime: "2022-02-03 17:50:00.000",
  machine_timestamp_utc: "2022-02-03 17:37:00.000",
  createdby: "0",
  modifiedby: "0",
};

let getBioID = (bioName) => {
  let bioIds = ["SpO2", "HZ", "NIBP_SYS", "T1", "PR", "ECG", "RESP", "T2"];

  if (bioIds.indexOf(bioName) < 0) {
    return 0;
  } else {
    return parseInt(bioIds.indexOf(bioName)) + 1;
  }
};

let getTimeInFormats = (stringDate) => {
  let year = stringDate.slice(0, 4);
  let month = stringDate.slice(4, 6);
  let day = stringDate.slice(6, 8);
  let hr = stringDate.slice(8, 10);
  let min = stringDate.slice(10, 12);
  let sec = stringDate.slice(12, 14);

  let newFinalDate = new Date(
    Date.UTC(year, month - 1, day, hr, min, sec)
  ).toUTCString();
  console.log("newFinalDate ::::", new Date(newFinalDate).getTime());

  let finalDate = `${year}-${month}-${day} ${hr}:${min}:${sec}`;
  return [finalDate, new Date(finalDate + "GMT").getTime()];
};

let createObject = (pId, bioId, value, unit, macTimeStamp, macTimestampUtc) => {
  let vals = {
    machineid: 1,
    pid: pId,
    biometric_id: bioId,
    value,
    unit,
    machine_timestamp: macTimeStamp,
    storetime: "",
    machine_timestamp_utc: macTimestampUtc,
    createdby: "0",
    modifiedby: "0",
  };

  return vals;
};

let usp_insert_norm_data = [
  {
    machineid: "1",
    pid: "11",
    biometric_id: "1",
    value: "98",
    unit: "%",
    machine_timestamp: "20220203173700",
    storetime: "2022-02-03 17:50:00.000",
    machine_timestamp_utc: "2022-02-03 17:37:00.000",
    createdby: "0",
    modifiedby: "0",
  },
];

let newDate = new Date("2022-02-03 17:37:00 GMT");
console.log(getTimeInFormats("20220215020520"));

// T1, T2, NIBP_PR, NIBP_MAP, NIBP_DIA, NIBP_SYS, ST_I, PVCs, HR, SPO2, PR, PI, IBP, NIBP, ECG, CO2
// ::: Show only Temp, HR, SPO2, PR, PI
