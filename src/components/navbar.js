import React from "react";
import Box from "./box";
import Text from "./text";
import IconDashboard from "../icons/dashboard_icon";
import IconTransaction from "../icons/transaction_icon";
import IconSchedule from "../icons/schedule_icon";
import IconUser from "../icons/user_icon";
import IconSetting from "../icons/setting_icon";




export default function Navbar() {
  return (
    <Box className="w-1/6 bg-black rounded-lg text-white p-[30px] block ">
      <Box>
        <Text className="text-[36px]">Board.</Text>
      </Box>

      <Box className="mt-[20px]">
      <Box className="flex gap-3 py-[10px] font-[700]">
        <IconDashboard height={25} width={18} />
        <Text className="text-[18px]">Dashboard</Text>
      </Box>
      <Box className="flex gap-3 py-[10px] font-[400] ! text-gray-400">
        <IconTransaction height={25} width={18} className="fill-[#BDBDBD]"/>
        <Text className="text-[18px]">Transactions</Text>
      </Box>
      <Box className="flex gap-3 py-[10px] font-[400] ! text-gray-400">  
        <IconSchedule height={25} width={18} stoke="#BDBDBD"/>
        <Text className="text-[18px]">Schedules</Text>
      </Box>
      <Box className="flex gap-3 py-[10px] font-[400] ! text-gray-400">
        <IconUser height={25} width={18} className="fill-[#BDBDBD]"/>
        <Text className="text-[18px]">Users</Text>
      </Box>
      <Box className="flex gap-3 py-[10px] font-[400] ! text-gray-400">
        <IconSetting height={25} width={18} className="fill-[#BDBDBD]"/>
        <Text className="text-[18px]">Settings</Text>
      </Box>
      </Box>

      <Box className="mt-[150px] !text-gray-300 block">
        <div className="py-[6px]"><Text className="">Help</Text></div>
        <div className="py-[6px]"><Text className="">Contact Us</Text></div>
      </Box>
    </Box>
  );
}
