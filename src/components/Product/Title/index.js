import React from "react";
import tw from "tailwind-styled-components";
import TitleAnimation from "../../Animations/TitleAnimation";

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

function Title() {
  return (
    <div>
      <TitleContainer>
        <TitleAnimation />
      </TitleContainer>
    </div>
  );
}

export default Title;
