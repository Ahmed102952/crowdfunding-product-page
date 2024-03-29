import React, { useEffect, useState } from "react";
import { Box } from "../components/Box";
import { InfoBox } from "../components/InfoBox";
import ProgressBar from "@ramonak/react-progress-bar";

export const Info = () => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setClientWidth(window.innerWidth);
    });
  }, [clientWidth]);
  return (
    <section id="info">
      <Box>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:items-start sm:gap-12">
          <InfoBox h2="$89,914" p="of $100,000 backed" border={true} />
          <InfoBox h2="5,007" p="total backers" border={true} />
          <InfoBox h2="56" p="days left" />
        </div>
        <div className="w-full h-3"></div>
        <ProgressBar completed={75} bgColor="#81D9D4" isLabelVisible={false} />
      </Box>
    </section>
  );
};
