let randomGenrator = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

// Get Heart Rate
let heartRate = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(90, 120);
  } else {
    return randomGenrator(25, 300);
  }
};

// Get SpO2
let spO2 = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(95, 100);
  } else {
    return randomGenrator(0, 100);
  }
};

// Get RESP
let resp = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(90, 120);
  } else {
    return randomGenrator(0, 120);
  }
};

// Get IBP
let ibp = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(110, 129);
  } else {
    return randomGenrator(0, 300);
  }
};

// Get Pulse Rate
let pr = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(90, 120);
  } else {
    return randomGenrator(25, 300);
  }
};

// Get Temprature
let temp = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(28, 35);
  } else {
    return randomGenrator(0, 50);
  }
};

// Get ECG
let ecg = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(0.5, 3);
  } else {
    return randomGenrator(0, 4);
  }
};

// Get CO2
let co2 = (vary = "more") => {
  if (vary == "less") {
    return randomGenrator(350, 2000);
  } else {
    return randomGenrator(200, 5000);
  }
};

//  Get DateTime
// let getDateTime = () => {
//   let now = new Date();
//   let year = now.getFullYear();
//   let month = now.getMonth() + 1;
//   let day = now.getDate();
//   let hour = now.getHours();
//   let minute = now.getMinutes();
//   let second = now.getSeconds();
//   if (month.toString().length == 1) {
//     month = "0" + month;
//   }
//   if (day.toString().length == 1) {
//     day = "0" + day;
//   }
//   if (hour.toString().length == 1) {
//     hour = "0" + hour;
//   }
//   if (minute.toString().length == 1) {
//     minute = "0" + minute;
//   }
//   if (second.toString().length == 1) {
//     second = "0" + second;
//   }

//   let date1,
//     date2,
//     date3,
//     date4,
//     date5,
//     date6,
//     date7,
//     date8 = "";

//   if (parseInt(second) < 8) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 8 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date1 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 8;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date1 = year + month + day + hour + minute + new_sec;
//   }

//   if (parseInt(second) < 7) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 7 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date2 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 7;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date2 = year + month + day + hour + minute + new_sec;
//   }

//   if (parseInt(second) < 6) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 6 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date3 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 6;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date3 = year + month + day + hour + minute + new_sec;
//   }

//   if (parseInt(second) < 5) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 5 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date4 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 5;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date4 = year + month + day + hour + minute + new_sec;
//   }

//   if (parseInt(second) < 4) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 4 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date5 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 4;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date5 = year + month + day + hour + minute + new_sec;
//   }

//   if (parseInt(second) < 3) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 3 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date6 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 3;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date6 = year + month + day + hour + minute + new_sec;
//   }

//   if (parseInt(second) < 2) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 2 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date7 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 2;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date7 = year + month + day + hour + minute + new_sec;
//   }

//   if (parseInt(second) < 1) {
//     let new_min = parseInt(minute) - 1;
//     if (new_min.toString().length == 1) {
//       new_min = "0" + new_min;
//     }

//     let new_sec = 1 - parseInt(second);
//     new_sec = 60 - new_sec;
//     date8 = year + month + day + hour + new_min + new_sec;
//   } else {
//     let new_sec = parseInt(second) - 1;
//     new_sec = 60 - new_sec;
//     if (new_sec.toString().length == 1) {
//       new_sec = "0" + new_sec;
//     }
//     date8 = year + month + day + hour + minute + new_sec;
//   }

//   // let dateTime = year + month + day + hour + minute + second;

//   let dateTime = [
//     date1,
//     date2,
//     date3,
//     date4,
//     date5,
//     date6,
//     date7,
//     date8,
//   ].sort();
//   return dateTime;
// };

// export let getSampleData = (vary = "more") => {
//   let completeData = {
//     ORU_R01: {
//       PID: "19760612",
//       Bed: "Bed40",
//       timeStamp: getDateTime(),
//       OBX: {
//         HR: { value: heartRate(vary), unit: "bpm" },
//         SpO2: { value: spO2(vary), unit: "%" },
//         RESP: { value: resp(vary), unit: "rpm" },
//         IBP: { value: ibp(vary), unit: "mmHg" },
//         PR: { value: pr(vary), unit: "bpm" },
//         TEMP: { value: temp(vary), unit: "℃" },
//       },
//     },
//   };

//   return completeData;
// };

let getDateTime = () => {
  let date1,
    date2,
    date3,
    date4,
    date5,
    date6,
    date7,
    date8 = "";
  date1 = new Date().getTime();
  date2 = new Date(Date.now() - 1000).getTime();
  date3 = new Date(Date.now() - 2000).getTime();
  date4 = new Date(Date.now() - 3000).getTime();
  date5 = new Date(Date.now() - 4000).getTime();
  date6 = new Date(Date.now() - 5000).getTime();
  date7 = new Date(Date.now() - 6000).getTime();
  date8 = new Date(Date.now() - 7000).getTime();
  let dateTime = [
    date1,
    date2,
    date3,
    date4,
    date5,
    date6,
    date7,
    date8,
  ].sort();
  return dateTime;
};

export let getSampleData = (vary = "more") => {
  let timeDate = getDateTime();
  let completeData = {
    pid: "19760612",
    bed: "Bed40",
    data: [
      {
        label: "HR",
        description: "Heart Rate",
        unit: "bpm",
        idealMin: 0,
        idealMax: 100,
        values: [
          [timeDate[0], heartRate(vary)],
          [timeDate[1], heartRate(vary)],
          [timeDate[2], heartRate(vary)],
          [timeDate[3], heartRate(vary)],
          [timeDate[4], heartRate(vary)],
          [timeDate[5], heartRate(vary)],
          [timeDate[6], heartRate(vary)],
          [timeDate[7], heartRate(vary)],
        ],
      },
      {
        label: "SpO2",
        description: "Oxygen Saturation",
        unit: "percent",
        idealMin: 92,
        idealMax: 100,
        values: [
          [timeDate[0], spO2(vary)],
          [timeDate[1], spO2(vary)],
          [timeDate[2], spO2(vary)],
          [timeDate[3], spO2(vary)],
          [timeDate[4], spO2(vary)],
          [timeDate[5], spO2(vary)],
          [timeDate[6], spO2(vary)],
          [timeDate[7], spO2(vary)],
        ],
      },
      {
        label: "IBP",
        description: "Invassive Blood Pressure",
        unit: "mmHg",
        idealMin: 0,
        idealMax: 100,
        values: [
          [timeDate[0], ibp(vary)],
          [timeDate[1], ibp(vary)],
          [timeDate[2], ibp(vary)],
          [timeDate[3], ibp(vary)],
          [timeDate[4], ibp(vary)],
          [timeDate[5], ibp(vary)],
          [timeDate[6], ibp(vary)],
          [timeDate[7], ibp(vary)],
        ],
      },
      {
        label: "Temp",
        description: "Skin Temprature",
        unit: "C",
        idealMin: 98,
        idealMax: 105,
        values: [
          [timeDate[0], temp(vary)],
          [timeDate[1], temp(vary)],
          [timeDate[2], temp(vary)],
          [timeDate[3], temp(vary)],
          [timeDate[4], temp(vary)],
          [timeDate[5], temp(vary)],
          [timeDate[6], temp(vary)],
          [timeDate[7], temp(vary)],
        ],
      },
      {
        label: "NIBP",
        description: "Native Invassive Blood Pressure",
        unit: "mmHg",
        idealMin: 0,
        idealMax: 100,
        values: [
          [timeDate[0], ibp(vary)],
          [timeDate[1], ibp(vary)],
          [timeDate[2], ibp(vary)],
          [timeDate[3], ibp(vary)],
          [timeDate[4], ibp(vary)],
          [timeDate[5], ibp(vary)],
          [timeDate[6], ibp(vary)],
          [timeDate[7], ibp(vary)],
        ],
      },
      {
        label: "ECG",
        description: "Electrocardiography",
        unit: "mV",
        idealMin: 0,
        idealMax: 4,
        values: [
          [timeDate[0], ecg(vary)],
          [timeDate[1], ecg(vary)],
          [timeDate[2], ecg(vary)],
          [timeDate[3], ecg(vary)],
          [timeDate[4], ecg(vary)],
          [timeDate[5], ecg(vary)],
          [timeDate[6], ecg(vary)],
          [timeDate[7], ecg(vary)],
        ],
      },
      {
        label: "CO2",
        description: "Carbon Di-Oxide",
        unit: "ppm",
        idealMin: 0,
        idealMax: 100,
        values: [
          [timeDate[0], co2(vary)],
          [timeDate[1], co2(vary)],
          [timeDate[2], co2(vary)],
          [timeDate[3], co2(vary)],
          [timeDate[4], co2(vary)],
          [timeDate[5], co2(vary)],
          [timeDate[6], co2(vary)],
          [timeDate[7], co2(vary)],
        ],
      },
    ],
  };
  return completeData;
};

// setInterval(() => {
//   let vary = "more";
//   console.log(JSON.stringify(getSampleData(vary)), ", ");
// }, 2000);
