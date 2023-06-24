import React from "react";
import PieChartComponent from "./piechart";
import Box from "./box";
import Text from "./text";
import Dropdown from "./dropdown";
import IconArrowRight from "../icons/arrowright";
import IconLine from "../icons/Line";

export default function Footer() {
  const handleSelect = (option) => {
    console.log("Selected option:", option);
    // Perform your logic here
  };
  const options = ["Option 1", "Option 2", "Option 3"];

  const sheduleData = [
    {
      id: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      place: "at Sunset Road, Kuta, Bali ",
      stoke: "#9BDD7C",
    },
    {
      id: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      place: "at Central Jakarta",
      stoke: "#6972C3",
    },
  ];
  return (
    <Box className="flex gap-10">
      <Box className="w-1/2 p-[10px] pt-[20px] pb-0 mt-[40px] bg-white rounded-xl">
        <Box className="flex justify-between">
          <Box>
            <Text className="font-[700] text-[18px]">Top products</Text>
          </Box>
          <Dropdown options={options} onSelect={handleSelect} />
        </Box>

        <PieChartComponent />
      </Box>
      <Box className="w-1/2 p-[10px] pt-[20px] pb-0 mt-[40px] bg-white rounded-xl">
        <Box className="flex justify-between">
          <Box>
            <Text className="font-[700] text-[18px]">Todays Shedule</Text>
          </Box>
          <Box className="flex gap-3  text-gray-500">
            <Box>
              <Text>See All</Text>
            </Box>
            <IconArrowRight width={6} height={23} />
          </Box>
        </Box>
        {sheduleData.map((iteam, idx) => (
          <Box className="flex gap-2 mt-5 text-gray-500"  key={idx}>
            <Box className="">
              <IconLine stoke={iteam.stoke} />
            </Box>
          
              <Box className="block">
                <div>
                  <Text className="text-[14px]"></Text>
                  {iteam.id}
                </div>
                <div>
                  <Text className="text-[14px]"></Text>
                  {iteam.time}
                </div>
                <div>
                  <Text className="text-[14px]"></Text>
                  {iteam.place}
                </div>
           
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
