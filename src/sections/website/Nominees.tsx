import React from "react";
import { weeklyOutfitNominees } from "@/constants";
import NomineeCard from "@/components/website/NomineeCard";

const Nominees = () => {
  return (
    <div className="padding min-h-screen">
      {/*    intro*/}
      <div>
        <h2 className="text-4xl font-bold font-grotesk">
          This Week's <span>Nominees</span>
        </h2>
      </div>
      {/*    Display the top nominees*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {weeklyOutfitNominees.map((nominee, index) => (
          <NomineeCard
            key={nominee.id}
            nominee={nominee}
            isWinner={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
export default Nominees;
