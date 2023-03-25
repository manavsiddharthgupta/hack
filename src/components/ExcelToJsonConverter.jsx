import React, { useState } from "react";
import * as XLSX from "xlsx";

function ExcelToJsonConverter(props) {
  const [jsonResult, setJsonResult] = useState(null);
  const [dataArray, setDataArray] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonResult = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setJsonResult(jsonResult);
    };
    reader.readAsArrayBuffer(file);
  };

  const convertToJsonArray = () => {
    if (jsonResult) {
      const keys = jsonResult[0];
      const dataArray = jsonResult.slice(1).map((row) => {
        return keys.reduce((obj, key, index) => {
          obj[key] = row[index];
          return obj;
        }, {});
      });
      setDataArray(dataArray);
      // Do something with the converted array data
      console.log(dataArray);
      const monthlysalary = [];
      for (let i = 0; i < dataArray.length; i++) {
        monthlysalary.push(dataArray[i].monthly_salary);
      }

      // console.log(monthlysalary);
      const fico = [];
      for (let i = 0; i < dataArray.length; i++) {
        fico.push(dataArray[i].fico);
      }

      // console.log(fico);

      const utilization = [];
      for (let i = 0; i < dataArray.length; i++) {
        utilization.push(dataArray[i].utilization);
      }

      // console.log(utilization);

      props.onSetExcelData({
        monthly_salary: monthlysalary,
        fico: fico,
        utilization: utilization,
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <button type="button" onClick={convertToJsonArray}>
        Convert to Array
      </button>
    </div>
  );
}

export default ExcelToJsonConverter;
