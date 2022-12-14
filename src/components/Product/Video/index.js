import React from "react";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import VideoFile from "../../../assets/videos/video.mp4";
import { animation3, animation4, animation5 } from "../../../constants";
import VideoOverlay from "../../VideoOverlay";

const VideoContainer = tw.div`
  max-w-[1080px]
  rounded-[20px]
  m-auto
  group
  relative
`;

const VideoDescription = tw.div`
  text-[20px]
  text-center
  pt-[40px]
  text-titleDescription
  font-medium
  pl-4
  pr-4
  md:pt-[100px]
  md:px-[40px]
  lg:w-[640px]
  lg:m-auto
  lg:text-[22px]
`;

const Videobuttons = tw.div`
  flex
  gap-[18px]
  flex-col
  justify-center
  items-center
  pl-4
  pr-4
  mt-[30px]
  md:flex-row
  md:items-center
  md:justify-center
  md:pt-[35px]
  md:w-[400px]
  md:m-auto
`;

function Video({ modalIsOpen, setIsOpen }) {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="pt-10 md:px-10 z-10">
        {modalIsOpen ? <VideoOverlay closeModal={closeModal} /> : null}
        <VideoContainer onClick={openModal}>
          <div>
            <motion.video
              style={{ perspective: "9cm" }}
              className="md:rounded-[20px] cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={animation5}
              playsInline
              loop
              muted
              autoPlay
              alt="All the devices"
              src={VideoFile}
            />
            <div className="z-1 group-hover:scale-125 transition duration-300 ease-in cursor-pointer absolute flex justify-center items-center w-[57px] h-[57px] top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-bodyBg lg:w-[83px] lg:h-[83px] rounded-full">
              <div className="flex justify-center items-center bg-bodyBg rounded-full w-[57px] h-[57px]">
                <div className="ml-[5px] arrow-right"></div>
              </div>
            </div>
          </div>
        </VideoContainer>
      </div>
      <VideoDescription>
        <motion.p
          className="header-description"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={animation4}
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
          variants={animation3}
          className="cursor-pointer border border-transparent hover:border-gray hover:bg-white hover:text-black transition duration-100 ease-in md:w-[172px] max-w-[352px] font-black w-[100%] text-[12px] tracking-[0.72px] py-[12px] px-[25px] bg-black rounded-[20px] text-white"
        >
          TRY IT FOR FREE
        </motion.button>
        <motion.button
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={animation3}
          className="cursor-pointer transition duration-100 ease-in md:w-[172px] hover:text-gray border border-navBorder max-w-[352px] md:mt-[0] w-[100%] font-black text-[12px] tracking-[0.72px] py-[12px] px-[25px] rounded-[20px] mt-[15px]"
        >
          VIEW FEATURES
        </motion.button>
      </Videobuttons>
    </div>
  );
}

export default Video;
