import React, { useEffect, useState } from "react";
import { Box } from "../compoenets/Box";
import { InfoBox } from "../compoenets/InfoBox";
import { AnimatedLineProgressBar } from "@frogress/line";

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
        <AnimatedLineProgressBar
          percent={75}
          transition={{ easings: "linear" }}
          progressColor="hsl(176, 50%, 47%)"
          rounded={30}
          height={14}
          key={clientWidth}
        />
      </Box>
    </section>
  );
};
