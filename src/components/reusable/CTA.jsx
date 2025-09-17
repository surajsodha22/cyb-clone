import React from "react";

const CTA = ({image}) => {
  return (
    <>
      <div className="w-full">
        <img src={image} alt="partnershipCTA" className="w-full" />
      </div>
    </>
  );
};

export default CTA;
