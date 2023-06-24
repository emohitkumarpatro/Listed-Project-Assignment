import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Box from "./box";
import IconDot from "../icons/dot";
import Text from "./text";

const data = [
  { name: "Basic Tees", value: 550 ,per:"55%"},
  { name: "Custom Short Pants", value: 310 , per:"31%" },
  { name: "Super Hoodies", value: 140 , per:"14%" },
  
];

const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartComponent() {
  const demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";
  return (
    <Box className="flex gap-10">
      <ResponsiveContainer width={200} height={200} className="mt-[20px]">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <Box className="block mt-5">
        {data.map((item, index) => (
          <Box className="block mt-2" key={index}>
            <Box className="flex gap-2" >
              <IconDot
                width={11}
                height={25}
                fill={COLORS[index % COLORS.length]}
              />
              <Box>
                <Text className="font-[700] text-[14px] text-black">
                  {item.name}
                </Text>
              </Box>
            </Box>
            <Box className="px-[20px]">
              <Text className="text-black">{item.per}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
