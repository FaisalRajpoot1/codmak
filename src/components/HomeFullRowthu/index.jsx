import React from "react";
import { Text } from "./..";

export default function HomeFullRowthu({ thu = "Fri", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <Text size="xl" as="p" className="!text-white-A700 !text-[16.44px] !font-normal z-[1]">
          {thu}
        </Text>
        <div className="h-[24px] w-full mt-[-23px] bg-white-A700_42 rounded-[12px]" />
      </div>
    </div>
  );
}
