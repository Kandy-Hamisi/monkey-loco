import React from "react";

const Hero = () => {
  return (
    <div className="padding-t padding-x relative">
      {/*  big text */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-grotesk font-bold text-[200px]">Monkey</h1>
        <h1 className="text-4xl font-grotesk font-bold text-[200px]">Loco</h1>
      </div>

      {/*    side text paragraphs absolute*/}
      <div>
        <p className="max-w-xs leading-[30px] font-jakarta font-semibold">
          This is your ultimate destination for street fashion that radiates
          elegance and individuality
        </p>
      </div>
      <div className="absolute top-[70%] right-0">
        <p className="max-w-xs leading-[30px] font-jakarta font-semibold">
          Are you Loco enough to challenge your fellow peers in our tiny world?
        </p>
      </div>

      {/*    TODO: Add an image to the hero section*/}
      {/*    TODO: Popup best stylists to vote on*/}
    </div>
  );
};
export default Hero;
