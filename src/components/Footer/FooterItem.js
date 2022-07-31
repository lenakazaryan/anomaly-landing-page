import tw from "tailwind-styled-components";

const Footercontent = tw.div`
  border
  border-footerBorder
  text-white
  w-full
  rounded-[20px]
  p-6
  max-w-[480px]
  md:border-none
`;

function FooterItem({ title, description }) {
  return (
    <Footercontent>
      <p className="text-start text-footerSubtitle text-[16px] font-medium md:mb-[30px]">
        {title}
      </p>
      <ul className="text-start cursor-pointer">{description}</ul>
    </Footercontent>
  );
}

export default FooterItem;
