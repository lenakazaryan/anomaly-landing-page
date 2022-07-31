import tw from "tailwind-styled-components";
import JobContent from "../Job/JobContent";
import ProfilePicture from "../../assets/images/profile-picture.jpg";

const JobContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-[24px]
  px-4
  pt-[140px]
  md:flex-row
`;

function Job() {
  return (
    <JobContainer>
      <JobContent
        image={ProfilePicture}
        city="GEORGIA"
        job="PRODUCT DESIGNER"
        jobDescription="Occaecati omnis molestias nihil. Expedita sint voluptatem qui ut
          voluptas. Nemo quia eum deserunt omnis eaque."
      ></JobContent>
      <JobContent
        image={ProfilePicture}
        city="GEORGIA"
        job="PRODUCT DESIGNER"
        jobDescription="Occaecati omnis molestias nihil. Expedita sint voluptatem qui ut
          voluptas. Nemo quia eum deserunt omnis eaque."
      ></JobContent>
      <JobContent
        image={ProfilePicture}
        city="GEORGIA"
        job="PRODUCT DESIGNER"
        jobDescription="Occaecati omnis molestias nihil. Expedita sint voluptatem qui ut
          voluptas. Nemo quia eum deserunt omnis eaque."
      ></JobContent>
    </JobContainer>
  );
}

export default Job;
