import React from "react";
import { weeklyOutfitWinners } from "@/constants";
import WinnerCard from "@/components/website/WinnerCard";

const Winners = () => {
  return (
    <div className="padding min-h-screen">
      {/*    intro*/}
      <div className="mb-4">
        <h2 className="text-4xl font-bold font-grotesk">
          This Week's <span>Winners</span>
        </h2>
        <p></p>
      </div>
      {/*    Display the top nominees*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {weeklyOutfitWinners.map((nominee, index) => (
          <WinnerCard
            key={nominee.id}
            nominee={nominee}
            isWinner={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
export default Winners;
