import React from "react";
import Box from "./box";
import Text from "./text";

export default function DataCard({ icon, cardText, value,className,...otherProps }) {
  return (
    <Box className={className} {...otherProps}>
      <Box className="flex justify-end items-end">{icon}</Box>
      <Box className="block mt-3">
        <Box className="flex justify-start">
          <Text className="text-[14px]">{cardText}</Text>
        </Box>
        <Box className="flex justify-start">
          <Text className="text-[22px]">{value}</Text>
        </Box>
      </Box>
    </Box>
  );
}
