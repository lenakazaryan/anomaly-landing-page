import tw from "tailwind-styled-components";

const Navigation = tw.div`
  pb-[29px]
  ml-[20px]
  mt-[12px]
`;

const NavigationItem = tw.a`
 w-[105px]
 text-start
 text-gray  
 block 
 font-black 
 text-[12px] 
 tracking-[0.72px] 
 border 
 border-transparent 
 rounded-[20px] 
 py-[12px] 
 px-[21px]
hover:text-black 
hover:border-navBorder
`;

const NavigationButtons = tw.div`
  flex
  justify-center
  items-center
  border-t
  border-navBorder
  py-[29px]
  gap-[23px]
`;

const NavSignUp = tw.button`
  font-black 
  text-[12px] 
  tracking-[0.72px] 
  py-[12px] 
  px-[25px]
 bg-black 
  rounded-[20px]
  text-white
`;

const NavLogin = tw.button`
  font-black 
  mr-[40px] 
  text-[12px] 
  tracking-[0.72px]
`;

const MenuContainer = tw.div`
  absolute 
  left-0
 bg-overLaybg 
 w-[100%] 
 top-[65px] 
 h-[1500px] 
 z-50 lg:hidden
`;

const MenuContent = tw.div`
  absolute 
  left-0
  bg-bodyBg 
  w-[100%]
  top-[0] z-50
`;

function Menu() {
  return (
    <MenuContainer>
      <MenuContent>
        <Navigation>
          <NavigationItem to="/" className="">
            PRODUCT
          </NavigationItem>
          <NavigationItem to="/">PRICING</NavigationItem>
          <NavigationItem to="/">HELP</NavigationItem>
          <NavigationItem to="/">BLOG</NavigationItem>
        </Navigation>
        <NavigationButtons>
          <NavSignUp>SIGN UP</NavSignUp>
          <NavLogin>LOGIN</NavLogin>
        </NavigationButtons>
      </MenuContent>
    </MenuContainer>
  );
}

export default Menu;
