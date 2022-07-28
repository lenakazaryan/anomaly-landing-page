import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { readyToWorkAnimation1, readyToWorkAnimation2 } from "../../constants";

const ReadyToWorkContainer = tw.div`
  rounded-t-lg 
  h-[490px] 
  md:w-[100%] 
  bg-ready-background 
  bg-no-repeat 
  bg-center 
  bg-cover  
  md:flex 
  md:flex-col 
  md:justify-center 
  md:items-center
`;

const ReadyToWorkContent = tw.div`
  p-[32px] 
  md:w-[616px] 
  md:flex 
  md:flex-col 
  md:justify-center 
  md:items-center 
  lg:w-[530px]
`;

const ReadyToWorkTitle = tw.p`
  text-[44px] 
  text-white 
  text-start 
  leading-[48px] 
  pb-[25px] 
  font-bold 
  md:text-center 
  lg:text-[48px]
`;

const ReadyToWorkDescription = tw.p`
  text-white 
  text-start 
  leading-[25px] 
  font-medium 
  md:text-center 
  lg:leading-[28px] 
  lg:text-[18px]
`;

const ReadyToWorkButton = tw.button`
  transition 
  duration-300 
  ease-in
  border
  border-white
  hover:bg-transparent
  hover:text-white
  block 
  font-black 
  bg-white 
  text-black 
  w-[175px] 
  text-[12px] 
  tracking-[0.72px] 
  py-[15px] 
  px-[25px] 
  rounded-[50px]
  mt-[22px]
`;

function ReadyToWork() {
  return (
    <ReadyToWorkContainer>
      <ReadyToWorkContent>
        <motion.div
          className="readyToWork-title"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={readyToWorkAnimation1}
        >
          <ReadyToWorkTitle>
            Ready to Work with the most Intuitive Editor of All Time?
          </ReadyToWorkTitle>
        </motion.div>
        <motion.div
          className="readyToWork-description"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={readyToWorkAnimation2}
        >
          <ReadyToWorkDescription>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
            eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </ReadyToWorkDescription>
        </motion.div>
        <motion.div
          className="readyToWork-description"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={readyToWorkAnimation2}
        >
          <ReadyToWorkButton>TRY IT FOR FREE</ReadyToWorkButton>
        </motion.div>
      </ReadyToWorkContent>
    </ReadyToWorkContainer>
  );
}

export default ReadyToWork;
