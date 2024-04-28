

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Graphs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("sample-covid-data.csv");
       
        const parsedData = parseCSV(response.data);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const parseCSV = (csvString) => {
    
    return [
      { date: "2022-01-01", cases: 1000, deaths: 100 },
      { date: "2022-01-02", cases: 1200, deaths: 110 },
      { date: "2021-01-02", cases: 1700, deaths: 11090 },
     
    ];
  };

  return (
    <div>
      <h2>COVID-19 Data</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
        <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default Graphs;
