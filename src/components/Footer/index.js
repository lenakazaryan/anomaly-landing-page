import tw from "tailwind-styled-components";
import LogoLight from "../../assets/images/logo-light.png";
import FooterItem from "./FooterItem";
import {
  footerInfo,
  footerContact,
  footerSupport,
  footerSNews,
  getLists,
} from "../../helpers";

const FooterLogoContainer = tw.div`
  w-[133px]
  m-auto
  md:m-0
  md:flex
  md:ml-[24px]
  sm:self-start
  lg:m-0
  lg:mt-[40px]
`;

const FooterContentContainer = tw.div`
  pt-2.5
  flex
  flex-col
  gap-[19px]
  justify-center
  items-center
  md:flex-row
  md:gap-[68px]
`;

const FooterContainer = tw.div`
  pt-5
  bg-footerBackground 
  pr-4
  pl-4 
  pb-[41px] 
  md:flex 
  md:flex-col
  md:justify-center
  md:items-center
  lg:flex
  lg:flex-row
  lg:gap-[60px]
`;

const FooterLogo = tw.img`
 pt-[25px]
 pb-2
 lg:pt-0
 imgfooter
 cursor-pointer
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="lg:m-auto lg:flex lg:gap-[60px]">
        <FooterLogoContainer>
          <FooterLogo src={LogoLight} />
        </FooterLogoContainer>
        <FooterContentContainer>
          <FooterItem title="Info" description={getLists(footerInfo)} />
          <FooterItem title="Contact" description={getLists(footerContact)} />
          <FooterItem title="Support" description={getLists(footerSupport)} />
          <FooterItem title="News" description={getLists(footerSNews)} />
        </FooterContentContainer>
      </div>
    </FooterContainer>
  );
}

export default Footer;
