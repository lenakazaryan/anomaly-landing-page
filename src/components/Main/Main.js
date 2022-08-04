import { Routes, Route } from "react-router-dom";
import Product from "../Product/Product";
import tw from "tailwind-styled-components";
import Pricing from "../../components/Pricing";

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

function Main() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default Main;
