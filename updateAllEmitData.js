import sql from "mssql";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// console.log("All Data ::::::::", process.env["pathtrail"]);
// Connect to DB
var config = {
  user: process.env["user"],
  password: process.env["password"],
  server: process.env["server"],
  database: process.env["database"],
  // port: process.env["port"],
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

var pathTrail = process.env["pathtrail"];

//   server: "192.168.1.22",

let updateLastFetchedIDJSON = (dataToInsert) => {
  let dataToEnter = JSON.stringify({ lastFetchedID: dataToInsert });
  fs.writeFileSync(pathTrail, dataToEnter);
};

let updateAllEmitData = () => {
  let fileData = fs.readFileSync(pathTrail);
  fileData = JSON.parse(fileData);
  fileData = fileData.lastFetchedID;

  var conn = new sql.ConnectionPool(config);
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);

      let sqlQ = `SELECT TOP (100) * FROM [web].[patient_mapping] WHERE isactive = 1 AND isdeleted = 0;`;

      request.query(sqlQ).then(function (recordSet) {
        //   console.log("Active Patients ::::::::::", recordSet.recordset);

        let dbRecord = recordSet.recordset;
        dbRecord = dbRecord.map((item) => {
          return {
            pid: item.pid,
            lastId: 0,
            isactive: item.isactive,
            bedId: item.bedid,
          };
        });

        let filePids = fileData.map((fileD) => {
          return fileD.pid;
        });

        let dbPids = dbRecord.map((dbD) => {
          return dbD.pid;
        });

        //   console.log("Final DB Records ::::::", dbPids);
        //   console.log("Final File Records ::::::", filePids);

        var result = dbPids.filter((item) => filePids.indexOf(item) == -1);

        //   console.log("Missing ::::::::: ", result);

        let dataToInsert = fileData.map((item) => {
          if (dbPids.includes(item.pid)) {
            //   console.log("includes :::::", item.pid);
            return { ...item, isactive: true };
          } else {
            //   console.log("Excludes :::::", item.pid);
            return { ...item, isactive: false };
          }
        });

        let newData = dbRecord.filter((item) => {
          if (result.includes(item.pid)) {
            return item;
          } else {
            return false;
          }
        });

        let finalDataToInsert = [...dataToInsert, ...newData];

        console.log("**************************************************");
        console.table([...finalDataToInsert]);
        console.log("**************************************************");

        // console.log("Final Data to Insert ::::", finalDataToInsert);
        updateLastFetchedIDJSON(finalDataToInsert);
      });
    })
    .catch((err) => {
      console.log("Update SQL Error", err);
    });
};

export default updateAllEmitData;
