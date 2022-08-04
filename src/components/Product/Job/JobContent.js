import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { pictureAnimation } from "../../../constants";

const JobItem = tw.div`
 bg-jobBackground 
 rounded-[20px] 
 p-[28px] 
 max-w-[688px] 
 md:max-w-[335px]
`;

const JobProfileImage = tw.img`
 w-[40px] 
 h-[40px] 
 rounded-[50%] 
 mr-[18px] 
 mb-[23px]
`;

const JobDescription = tw.p`
  text-gray 
  text-start
  leading-[28px] 
  font-medium 
  text-[18px]
`;

const JobTextContainer = tw.div`
 flex
 flex-col
justify-start
items-start
`;

const JobCity = tw.span`
  cityColor 
  text-[10px] 
  font-bold
`;

const JobName = tw.span`
text-gray 
  text-[10px] 
  font-bold
`;

function JobContent({ image, city, job, jobDescription }) {
  return (
    <motion.div
      className="job-container-item"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={pictureAnimation}
    >
      <JobItem>
        <div className="flex flex-row ">
          <div>
            <JobProfileImage src={image} />
          </div>
          <JobTextContainer>
            <JobCity>{city}</JobCity>
            <JobName>{job}</JobName>
          </JobTextContainer>
        </div>
        <JobDescription>{jobDescription}</JobDescription>
      </JobItem>
    </motion.div>
  );
}

export default JobContent;
