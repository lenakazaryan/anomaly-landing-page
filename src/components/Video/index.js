import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import {
  headerAnimation1,
  headerAnimation2,
  headerAnimation3,
  headerAnimation4,
} from "../../constants";

const VideoContainer = tw.div`
  pt-[40px]
  max-w-[1080px]
  rounded-[20px]
  m-auto
  md:pl-[40px]
  md:pr-[40px]
`;

const VideoDescription = tw.div`
  text-[20px]
  text-center
  pt-[40px]
  text-titleDescription
  font-medium
  pl-[16px]
  pr-[16px]
  md:pt-[80px]
  md:pl-[40px]
  md:pr-[40px]
  lg:w-[640px]
  lg:m-auto
  lg:text-[22px]
`;

const Videobuttons = tw.div`
  flex
  gap-[28px]
  flex-col
  justify-center
  items-center
  pl-[16px]
  pr-[16px]
  mt-[30px]
  md:flex-row
  md:items-center
  md:justify-center
  md:pt-[20px]
  md:w-[400px]
  md:m-auto
`;

function Video() {
  return (
    <div>
      <VideoContainer>
        <motion.video
          className="md:rounded-[20px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={headerAnimation4}
          playsInline
          loop
          muted
          autoPlay
          alt="All the devices"
          src="https://framerusercontent.com/modules/assets/E7AQSyyv8rD3jPODkpnjhYD0Zxc~q70HAdfRtMA3DgFOCzOxyQ1Y7CVHkzadtdNIKlT3C2o.mp4"
        />
      </VideoContainer>
      <VideoDescription>
        <motion.p
          className="header-description"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={headerAnimation3}
        >
          Deserunt necessitatibus omnis doloremque. Aut deleniti inventore ipsum
          quaerat quae ducimus nulla.
        </motion.p>
      </VideoDescription>
      <Videobuttons>
        <motion.button
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={headerAnimation1}
          className="border border-transparent hover:border-gray hover:bg-white hover:text-black transition duration-300 ease-in md:w-[172px] max-w-[352px] font-black w-[100%] text-[12px] tracking-[0.72px] py-[12px] px-[25px] bg-black rounded-[20px] text-white"
        >
          TRY IT FOR FREE
        </motion.button>
        <motion.button
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={headerAnimation2}
          className="transition duration-300 ease-in md:w-[172px] hover:text-gray border border-navBorder max-w-[352px] md:mt-[0] w-[100%] font-black text-[12px] tracking-[0.72px] py-[12px] px-[25px] rounded-[20px] mt-[15px]"
        >
          VIEW FEATURES
        </motion.button>
      </Videobuttons>
    </div>
  );
}

export default Video;
