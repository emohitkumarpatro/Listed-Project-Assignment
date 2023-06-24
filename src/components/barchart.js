import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "./box";
import Text from "./text";
import Dropdown from "./dropdown";
import IconDot from "../icons/dot";

const data = [
  {
    name: "Week 1",
    User: 4000,
    Guest: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    User: 3000,
    Guest: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    User: 2000,
    Guest: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    User: 2780,
    Guest: 3908,
    amt: 2000,
  },
  {
    name: "Week 5",
    User: 1890,
    Guest: 4800,
    amt: 2181,
  },
  {
    name: "Week 6",
    User: 2390,
    Guest: 3800,
    amt: 2500,
  },
  {
    name: "Week 7",
    User: 3490,
    Guest: 4300,
    amt: 2100,
  },
];

export default function BarChart() {
  const demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";
  const handleSelect = (option) => {
    console.log("Selected option:", option);
    // Perform your logic here
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <Box className=" mt-[40px] bg-white border-1 border-black p-[20px] rounded-xl">
      <Box className="flex justify-between px-[20px]">
        <Box className="block ">
          <Box>
            <Text className="font-[700] text-[18px]">Activities</Text>
          </Box>
          <Dropdown options={options} onSelect={handleSelect} />
        </Box>
        <Box className="flex gap-10 mt-4">
          <Box className="flex gap-1">
            <IconDot width={12} height={20} className="fill-[#E9A0A0]" />
            <Text className="text-[14px]">Guest</Text>
          </Box>
          <Box className="flex gap-1">
            <IconDot width={12} height={20} className="fill-[#9BDD7C]" />
            <Text className="text-[14px]">User</Text>
          </Box>
        </Box>
      </Box>
      <ResponsiveContainer width={1000} height= {300} className="mt-[20px]">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Guest"
            stroke="#E9A0A0"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="User" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
