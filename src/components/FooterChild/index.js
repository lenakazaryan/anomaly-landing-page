import tw from "tailwind-styled-components";
import { getListsFooter } from "../../helpers";
import { footerItem } from "../../helpers";

const FooterChildContainer = tw.div`
bg-footerBackground
 pl-4
 pr-4
 text-white 
 pt-[41px] 
 pb-[45px]
`;

const FooterChildren = tw.div`
  border-t 
  border-footerBorder 
  pt-[35px]
  flex 
  flex-col 
  justify-center 
  items-center 
  text-footerChildText 
  text-[12px] 
  md:flex-row 
  md:justify-around
  max-w-[1328px]
  m-auto
`;

function FooterChild() {
  return (
    <FooterChildContainer>
      <FooterChildren>{getListsFooter(footerItem)}</FooterChildren>
    </FooterChildContainer>
  );
}

export default FooterChild;
