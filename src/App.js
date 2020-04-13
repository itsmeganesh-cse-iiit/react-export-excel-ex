import React from "react";
import { CSVLink } from "react-csv";
const csvData = [
  ["County Name", "Population"],
  ["India", "2B"],
  ["Spain", "2M"],
];
function App() {
  return (
    <div className="App">
      <CSVLink data={csvData} filename={"filename.csv"}>
        Download
      </CSVLink>
    </div>
  );
}

export default App;
