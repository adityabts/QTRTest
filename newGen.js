let emitSocketData = () => {
  return new Promise((resolve, reject) => {
    let dates = [
      (new Date().getTime() / 1000) | 0,
      ((new Date().getTime() + 1000) / 1000) | 0,
    ];

    let hr = [
      [dates[0], 60],
      [dates[1], 60],
    ];
    let spo2 = [
      [dates[0], 99],
      [dates[1], 99],
    ];
    let co2 = [];
    let temp1 = [
      [dates[0], 36],
      [dates[1], 36],
    ];
    let temp2 = [
      [dates[0], 36],
      [dates[1], 36],
    ];
    let pr = [
      [dates[0], 60],
      [dates[1], 60],
    ];
    let nibp_dia = [];
    let nibp_map = [];
    let nibp_pr = [];
    let nibp_sys = [];
    let ibp = [];
    let st1 = [
      [dates[0], 0.01],
      [dates[1], 0.01],
    ];
    let st2 = [
      [dates[0], 0.02],
      [dates[1], 0.02],
    ];
    let st3 = [
      [dates[0], 0.01],
      [dates[1], 0.01],
    ];
    let st_avr = [
      [dates[0], -0.01],
      [dates[1], -0.01],
    ];
    let st_avl = [
      [dates[0], 0],
      [dates[1], 0],
    ];
    let st_avf = [
      [dates[0], 0.02],
      [dates[1], 0.02],
    ];
    let st_v = [
      [dates[0], 0.02],
      [dates[1], 0.02],
    ];
    let qt = [
      [dates[0], 0],
      [dates[1], 0],
    ];
    let qtc = [
      [dates[0], 346],
      [dates[1], 346],
    ];
    let delta_qtc = [
      [dates[0], 0],
      [dates[1], 0],
    ];
    let qt_hr = [];
    let ppv_source = [];
    let rr = [
      [dates[0], 14],
      [dates[1], 14],
    ];
    let pvcs = [];
    let pi = [];

    let completeData = {
      pid: 1234,
      bed: "5283B5A9-2924-4977-8120-69AA7447F98D",
      data: [
        {
          label: "HR",
          biometricId: "FDE39724-8631-4B5B-BA6A-53C913F12CCD",
          description: "Heart Rate",
          unit: "bpm",
          idealMin: 50,
          idealMax: 120,
          values: hr,
        },
        {
          label: "SpO2",
          biometricId: "00B844E2-0BE4-48FA-B075-DEC231AD5F41",
          description: "Oxygen Saturation",
          unit: "percent",
          idealMin: 90,
          idealMax: 100,
          values: spo2,
        },
        {
          label: "Temp",
          biometricId: "B39CFD8E-0F78-4AB4-B2F6-C2CBE40A4445",
          description: "Temprature",
          unit: "C",
          idealMin: 36,
          idealMax: 39,
          values: temp1,
        },
        {
          label: "Temp 2",
          biometricId: "4CC322E5-E35D-4D18-B43B-DA7A1CA217B8",
          description: "Temprature",
          unit: "C",
          idealMin: 36,
          idealMax: 39,
          values: temp2,
        },
        {
          label: "PR",
          biometricId: "73F628C1-9785-441E-A3C8-F75AB65764C3",
          description: "Pulse Rate",
          unit: "bpm",
          idealMin: 50,
          idealMax: 120,
          values: pr,
        },
        {
          label: "NiBP DIA",
          biometricId: "28091780-3FE7-40EB-8ED0-6C2587FF18A9",
          description: "Non Invasive Blood Pressure - Diastolic ",
          unit: "mmHg",
          idealMin: 50,
          idealMax: 90,
          values: nibp_dia,
        },
        {
          label: "NiBP MAP",
          biometricId: "835E8F74-64C5-4BCD-9EC6-46C275C1BBA2",
          description: "Non Invasive Blood Pressure - Mean Arterial Pressure",
          unit: "mmHg",
          idealMin: 60,
          idealMax: 110,
          values: nibp_map,
        },
        {
          label: "NiBP PR",
          biometricId: "1FD47CCB-123B-4954-B7B7-40645D59E6E6",
          description: "Non Invasive Blood Pressure - Pulse Rate",
          unit: "mmHg",
          idealMin: 50,
          idealMax: 120,
          values: nibp_pr,
        },
        {
          label: "NiBP SYS",
          biometricId: "1535A345-BE08-4E97-94AF-549D7CB4B97B",
          description: "Non Invasive Blood Pressure - Systolic",
          unit: "mmHg",
          idealMin: 90,
          idealMax: 160,
          values: nibp_sys,
        },
        {
          label: "ST 1",
          biometricId: "0E11B3F3-CFF1-4302-82BC-79DFC09C7AE4",
          description: "ECG parameter",
          unit: "mV",
          idealMin: -0.2,
          idealMax: 0.2,
          values: st1,
        },
        {
          label: "ST 2",
          biometricId: "948857B3-397D-44A0-862C-A519A88B4431",
          description: "ECG parameter",
          unit: "mV",
          idealMin: -0.2,
          idealMax: 0.2,
          values: st2,
        },
        {
          label: "ST 3",
          biometricId: "662C8A11-0C7E-40DC-985D-8B5C9C9959E4",
          description: "ECG parameter",
          unit: "mV",
          idealMin: -0.2,
          idealMax: 0.2,
          values: st3,
        },
        {
          label: "ST aVR",
          biometricId: "A3B8ABA3-492D-49F8-A930-778EC8961EE4",
          description: "ECG parameter",
          unit: "mV",
          idealMin: -0.2,
          idealMax: 0.2,
          values: st_avr,
        },

        {
          label: "ST aVL",
          biometricId: "8DC6FD32-7FCC-4E7D-A5A8-ADF22FCB454A",
          description: "ECG parameter",
          unit: "mV",
          idealMin: -0.2,
          idealMax: 0.2,
          values: st_avl,
        },
        {
          label: "ST aVF",
          biometricId: "66D82996-56B5-4853-8235-41CC3700E813",
          description: "ECG parameter",
          unit: "mV",
          idealMin: -0.2,
          idealMax: 0.2,
          values: st_avf,
        },
        {
          label: "ST V",
          biometricId: "B7D30D07-E652-4FC0-9BF9-78129C0DA9D3",
          description: "ECG parameter",
          unit: "mV",
          idealMin: -0.2,
          idealMax: 0.2,
          values: st_v,
        },
        {
          label: "QT",
          biometricId: "62EADE06-CEED-4E08-808C-02FF62A74C80",
          description: "ECG parameter",
          unit: "mV",
          idealMin: 0,
          idealMax: 0,
          values: qt,
        },
        {
          label: "QTc",
          biometricId: "4C88E026-2AAD-4C0E-BAAF-42FDD3091B13",
          description: "ECG parameter",
          unit: "mV",
          idealMin: 200,
          idealMax: 500,
          values: qtc,
        },
        {
          label: "delta QTc",
          biometricId: "1B858D89-DFE1-4937-BD22-0BBA5FF1FFBA",
          description: "ECG parameter",
          unit: "mV",
          idealMin: 30,
          idealMax: 60,
          values: delta_qtc,
        },
        {
          label: "QT HR",
          biometricId: "17CA1E28-2266-4B33-BD69-9F588165B0C7",
          description: "QT HR",
          unit: "mV",
          idealMin: 30,
          idealMax: 60,
          values: qt_hr,
        },
        {
          label: "PPV Source",
          biometricId: "18E39CCA-DCC4-45D6-BC00-61C42C2342F0",
          description: "Positive Predictive Value",
          unit: "ppv",
          idealMin: 0,
          idealMax: 1,
          values: ppv_source,
        },
        {
          label: "RR",
          biometricId: "C5607886-D201-4929-88EE-7DAD5F2334D2",
          description: "Resp Rate",
          unit: "bpm",
          idealMin: 12,
          idealMax: 30,
          values: rr,
        },
        {
          label: "PVCs",
          biometricId: "1F1DBDCD-9A0D-41D8-9FBD-CBD3F0985D90",
          description: "Premature ventricular contractions",
          unit: "bpm",
          idealMin: 60,
          idealMax: 100,
          values: pvcs,
        },
        {
          label: "PI",
          biometricId: "109BE55E-03A7-43F3-8472-682DBFBC1BAD",
          description: "Perfusion Index",
          unit: "%",
          idealMin: 0.02,
          idealMax: 20,
          values: pi,
        },
      ],
    };

    resolve(completeData);
  });
};

module.exports = emitSocketData;

// export default emitSocketData;
