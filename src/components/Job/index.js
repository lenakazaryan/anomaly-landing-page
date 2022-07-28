import tw from "tailwind-styled-components";
import JobContent from "../Job/JobContent";

const JobContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-[24px]
  px-[16px]
  pt-[140px]
  md:flex-row
`;

function Job() {
  return (
    <JobContainer>
      <JobContent
        image="https://framerusercontent.com/modules/assets/ghykWlIGB0THdwsj1UOsaz844~MNcnbSp3qeegxRyM6DYClrwQKoqN9Cjnc2wKxFe__4Q.jpg"
        city="GEORGIA"
        job="PRODUCT DESIGNER"
        jobDescription="Occaecati omnis molestias nihil. Expedita sint voluptatem qui ut
          voluptas. Nemo quia eum deserunt omnis eaque."
      ></JobContent>
      <JobContent
        image="https://framerusercontent.com/modules/assets/ghykWlIGB0THdwsj1UOsaz844~MNcnbSp3qeegxRyM6DYClrwQKoqN9Cjnc2wKxFe__4Q.jpg"
        city="GEORGIA"
        job="PRODUCT DESIGNER"
        jobDescription="Occaecati omnis molestias nihil. Expedita sint voluptatem qui ut
          voluptas. Nemo quia eum deserunt omnis eaque."
      ></JobContent>
      <JobContent
        image="https://framerusercontent.com/modules/assets/ghykWlIGB0THdwsj1UOsaz844~MNcnbSp3qeegxRyM6DYClrwQKoqN9Cjnc2wKxFe__4Q.jpg"
        city="GEORGIA"
        job="PRODUCT DESIGNER"
        jobDescription="Occaecati omnis molestias nihil. Expedita sint voluptatem qui ut
          voluptas. Nemo quia eum deserunt omnis eaque."
      ></JobContent>
    </JobContainer>
  );
}

export default Job;
