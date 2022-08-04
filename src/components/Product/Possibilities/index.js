import tw from "tailwind-styled-components";
import PossibilityItem from "./PossibilityItem";
import Possibility from "./Possibility";
// import PossibilityImage from "../../assets/images/possibility.webp";
import PossibilityImage from "../../../assets/images/possibility.webp";

const PossibilyContainer = tw.div`
  md:mt-[40px]
`;

const PossibilyContent = tw.div`
  w-[100%] 
  pl-4 
  pr-4
  pt-[50px] 
  flex flex-col 
  pb-[25px] 
  justify-center 
  items-center
`;

function Possibilities() {
  return (
    <PossibilyContainer>
      <PossibilyContent>
        <PossibilityItem
          image={PossibilityImage}
          title="Write Articles"
          subtitle=" with Ease"
          description="Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum
        nibh, ut fermentum massa"
        />
        <Possibility
          image={PossibilityImage}
          title="Write Articles"
          subtitle=" with Ease"
          description="Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum
        nibh, ut fermentum massa"
        />
        <PossibilityItem
          image={PossibilityImage}
          title="Write Articles"
          subtitle=" with Ease"
          description="Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum
        nibh, ut fermentum massa"
        />
      </PossibilyContent>
    </PossibilyContainer>
  );
}

export default Possibilities;
