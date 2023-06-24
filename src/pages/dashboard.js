import React from 'react';
import Box from '../components/box';
import Navbar from '../components/navbar';
import AnalysisPage from '../components/analysispage';


export default function Dashboard() {
  return (
    <Box className="flex pt-[30px] pl-[30px] bg-gray-100 h-screen">

    <Navbar />
    <AnalysisPage/>
      
    </Box>
  )
}
