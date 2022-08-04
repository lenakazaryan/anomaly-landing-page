import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { pictureAnimation, textAnimation } from "../../../constants";

const PossibilyItem = tw.div`
  bg-posibilityBackground 
  max-w-[448px] 
  p-[28px] 
  rounded-[20px] 
  mb-[24px] 
  md:flex 
  md:flex-row 
  md:justify-between
  md:max-w-[900px] 
  md:bg-transparent
`;

const PossibilyImageContainer = tw.div`
 rounded-[20px] 
 md:max-w-[453px]
`;

const PossibilyTextsContainer = tw.div`
 md:pl-[70px]
`;

const PossibilyTitle = tw.p`
 text-[28px] 
 font-bold 
 pt-[18px] 
 leading-[35px] 
 md:text-[44px] 
 md:leading-[40px] 
 md:mb-[15px]
 lg:text-[44px]
`;

const PossibilitySubTitle = tw.span`
 text-[28px]
 text-titleColor 
 font-bold 
 leading-[35px] 
 md:text-[44px] 
 md:leading-[40px]
 lg:text-[44px]
`;

const PossibilityDescription = tw.p`
  text-titleDescription 
  font-medium 
  text-[16px]
`;

function PossibilityItem({ image, title, subtitle, description }) {
  return (
    <PossibilyItem>
      <PossibilyImageContainer>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={pictureAnimation}
        >
          <img className="rounded-[20px] w-[100%]" src={image} />
        </motion.div>
      </PossibilyImageContainer>
      <PossibilyTextsContainer>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={textAnimation}
          className="possibility-texts-container"
        >
          <PossibilyTitle>
            {title}
            <PossibilitySubTitle>{subtitle}</PossibilitySubTitle>
          </PossibilyTitle>
          <PossibilityDescription>{description}</PossibilityDescription>
        </motion.div>
      </PossibilyTextsContainer>
    </PossibilyItem>
  );
}

export default PossibilityItem;
