// import React, { useState, useEffect } from "react";
// import tw from "tailwind-styled-components";
// import { navbarAnimation } from "../../constants";
// import { motion } from "framer-motion";
// import { Cross as Hamburger } from "hamburger-react";
// import Menu from "../Menu/Menu";
// import LogoDark from "../../assets/images/logo-dark.png";

// const NavbarContainer = tw.div`
//   flex
//   flex-row
//   justify-between
//   items-center
//   py-3
//   px-4
//   border-b
//   border-navBorder
//   max-w-[1328px]
//   m-auto
//   lg:border-none
//   relative
//   lg:justify-between
//   md:px-[35px]
// `;

// const NavbarLogo = tw.div`
//   w-[133px]
//   cursor-pointer
// `;

// const Navigation = tw.div`
//   none
//   hidden
//   lg:block
// `;

// const NavigationButtons = tw.div`
//  mr-[15px]
//  hidden
//  lg:flex
// `;

// const NavigationItem = tw.a`
//   text-gray
//   font-black
//   text-[12px]
//   tracking-[0.72px]
//   border
//   border-transparent
//   rounded-[20px]
//   py-3
//   px-[21px]
//   hover:text-black
//  hover:border-navBorder
//   cursor-pointer
// `;

// const NavSignUp = tw.button`
// transition
// duration-300
// ease-in
// font-black
// text-[12px]
// tracking-[0.72px]
// py-[12px]
// px-[25px]
// border
// border-transparent
// bg-black
// rounded-[20px]
// text-white
// hover:bg-white
// hover:text-black
// hover:border-navBorder
// cursor-pointer
// `;

// const NavLogin = tw.button`
//   transition
//   duration-300
//   ease-in
//   hover:text-gray
//   font-black
//   mr-[40px]
//   text-[12px]
//   tracking-[0.72px]
//   cursor-pointer
// `;

// function Navbar({ hidden, isHidden }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpenMenu = () => {
//     setIsOpen(!isOpen);
//     isHidden(!hidden);
//   };

//   useEffect(() => {
//     isOpen
//       ? (document.body.style.overflow = "hidden")
//       : (document.body.style.overflow = "");
//   }, [isOpen]);

//   return (
//     <motion.div
//       className="lg:pt-[20px] pl-[10px]"
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0.8 }}
//       variants={navbarAnimation}
//     >
//       <NavbarContainer>
//         <NavbarLogo>
//           <img className="logo imgnav" src={LogoDark} />
//         </NavbarLogo>
//         <Navigation>
//           <NavigationItem to="/">PRODUCT</NavigationItem>
//           <NavigationItem to="/">PRICING</NavigationItem>
//           <NavigationItem to="/">HELP</NavigationItem>
//           <NavigationItem to="/">BLOG</NavigationItem>
//         </Navigation>
//         <NavigationButtons>
//           <NavLogin>LOGIN</NavLogin>
//           <NavSignUp>SIGN UP</NavSignUp>
//         </NavigationButtons>
//         <div className="w-[40px] h-[40px] bg-menuButtonBackground rounded-[5px] lg:hidden">
//           <div className="hamburger fixed" onClick={handleOpenMenu}>
//             <Hamburger direction="right" />
//           </div>
//         </div>
//       </NavbarContainer>
//       {isOpen ? (
//         <Menu
//           hidden={hidden}
//           isHidden={isHidden}
//           isOpen={isOpen}
//           setIsOpen={setIsOpen}
//         />
//       ) : null}
//     </motion.div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { navbarAnimation } from "../../constants";
import { motion } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import Menu from "../Menu/Menu";
import LogoDark from "../../assets/images/logo-dark.png";

const NavbarContainer = tw.div`
  flex
  flex-row
  justify-between
  items-center
  py-3
  px-4
  border-b
  border-navBorder
  max-w-[1328px]
  m-auto
  lg:border-none
  lg:justify-between
  md:px-[35px]
`;

const NavbarLogo = tw.div`
  w-[133px]
  cursor-pointer
`;

const Navigation = tw.div`
  none
  hidden
  lg:block 
`;

const NavigationButtons = tw.div`
 mr-[15px]
 hidden
 lg:flex
`;

const NavigationItem = tw.a`
  text-gray 
  font-black 
  text-[12px] 
  tracking-[0.72px] 
  border 
  border-transparent 
  rounded-[20px] 
  py-3
  px-[21px] 
  hover:text-black
 hover:border-navBorder
  cursor-pointer
`;

const NavSignUp = tw.button`
transition 
duration-300 
ease-in 
font-black 
text-[12px] 
tracking-[0.72px] 
py-[12px] 
px-[25px] 
border 
border-transparent
bg-black 
rounded-[20px]
text-white
hover:bg-white
hover:text-black
hover:border-navBorder
cursor-pointer
`;

const NavLogin = tw.button`
  transition 
  duration-300 
  ease-in
  hover:text-gray 
  font-black 
  mr-[40px] 
  text-[12px] 
  tracking-[0.72px]
  cursor-pointer
`;

function Navbar({ hidden, isHidden }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    isHidden(!hidden);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <motion.div
      className="lg:pt-[20px] pl-[10px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={navbarAnimation}
    >
      <NavbarContainer>
        <NavbarLogo>
          <img className="logo imgnav" src={LogoDark} />
        </NavbarLogo>
        <Navigation>
          <NavigationItem to="/">PRODUCT</NavigationItem>
          <NavigationItem to="/">PRICING</NavigationItem>
          <NavigationItem to="/">HELP</NavigationItem>
          <NavigationItem to="/">BLOG</NavigationItem>
        </Navigation>
        <NavigationButtons>
          <NavLogin>LOGIN</NavLogin>
          <NavSignUp>SIGN UP</NavSignUp>
        </NavigationButtons>
        <div className="w-[40px] h-[40px] bg-menuButtonBackground rounded-[5px] lg:hidden">
          <div className="hamburger flex flex-col justify-center items-center" onClick={handleOpenMenu}>
            <Hamburger direction="right" />
          </div>
        </div>
      </NavbarContainer>
      {isOpen ? (
        <Menu
          hidden={hidden}
          isHidden={isHidden}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </motion.div>
  );
}

export default Navbar;
