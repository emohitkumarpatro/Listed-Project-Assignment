import React from "react";
import Box from "./box";
import DataCard from "./datacard";
import mockData from "./mockdata-datacard";
import Header from "./header";
import BarChart from "./barchart";
import PieChartComponent from "./piechart";
import Footer from "./footer";

export default function AnalysisPage() {

  return (
    <Box className="w-5/6 overflow-y-scroll rounded-lg  pl-[50px] pr-[30px] block py-[10px]">
      <Header/>
      <Box className="flex justify-between mt-[40px]">
      {mockData.map((items,idx)=>(
        <DataCard key={idx} cardText={items.cardText} icon={items.icon} value={items.value} className={items.className} />
      ))}
      </Box>
      <BarChart/>
     <Footer/>
    </Box>
  );
}
