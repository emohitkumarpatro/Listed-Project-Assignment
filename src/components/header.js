import React, { useState } from "react";
import Box from "./box";
import Text from "./text";
import IconNotification from "../icons/notification";
import IconSearch from "../icons/search";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { logout } = useAuth0();
  return (
    <Box className="h-[40px] flex justify-between">
      <Box>
        <Text className="font-[700] text-[24px] text-black">Dashboard</Text>
      </Box>
      <Box className="flex justify-self-end  gap-5">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Box>
          <IconNotification width={20} height={40} />
        </Box>
        <Box className="bg-white rounded-[50px] w-[40px] h-[40px] flex items-center justify-center">
          EM
        </Box>
        <button
         className="text-[#FFFFFF] w-[80px] h-[40px] bg-[#000000] rounded-lg"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </Box>
    </Box>
  );
}
