import React from "react";
import tw from "tailwind-styled-components";
import PricingAnimation from "../../Animations/PricingAnimation";

const TitleContainer = tw.div`
   text-[40px]
   flex
   flex-row
   flex-wrap
   justify-center
   pt-[58px]
   gap-[5px]
   items-center
   ml-[10px]
   mr-[10px]
   font-bold
`;

function TitlePricing() {
  return (
    <div>
      <TitleContainer>
        <PricingAnimation />
      </TitleContainer>
    </div>
  );
}

export default TitlePricing;
