import tw from "tailwind-styled-components";
import PossibilityItem from "./PossibilityItem";
import Possibility from "./Possibility";

const PossibilyContainer = tw.div`
  md:mt-[40px]
`;

const PossibilyContent = tw.div`
  w-[100%] 
  pl-[16px] 
  pr-[16px] 
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
          image="https://framerusercontent.com/modules/assets/WUBZt0YGx0bCjxwIGLqGzWX2vRU~Sq-x68UuHOypnQSMUuS-wK9R1Ru2866Yzi-yxES5TOw.jpg"
          title="Write Articles"
          subtitle=" with Ease"
          description="Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum
        nibh, ut fermentum massa"
        />
        <Possibility
          image="https://framerusercontent.com/modules/assets/WUBZt0YGx0bCjxwIGLqGzWX2vRU~Sq-x68UuHOypnQSMUuS-wK9R1Ru2866Yzi-yxES5TOw.jpg"
          title="Write Articles"
          subtitle=" with Ease"
          description="Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum
        nibh, ut fermentum massa"
        />
        <PossibilityItem
          image="https://framerusercontent.com/modules/assets/WUBZt0YGx0bCjxwIGLqGzWX2vRU~Sq-x68UuHOypnQSMUuS-wK9R1Ru2866Yzi-yxES5TOw.jpg"
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
