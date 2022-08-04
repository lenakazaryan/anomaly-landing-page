import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { pictureAnimation, animation3 } from "../../../constants";
import Table from "../Table";
import { FaChevronCircleDown } from "react-icons/fa";

const Price = tw.div`
 bg-jobBackground 
 rounded-[20px] 
 p-[28px] 
 max-w-[688px] 
 md:max-w-[1020px]
`;

const Button = tw.button`
cursor-pointer 
border
 border-gray
 hover:border-gray
 hover:text-gray
 transition
duration-100 
ease-in 
md:w-[240px] 
max-w-[352px] 
font-black 
w-[100%] 
text-[12px] 
tracking-[0.72px] 
mt-[30px]
py-[12px] 
px-[25px] 
rounded-[20px]
 text-black

`;

function PriceItem() {
  return (
    <div>
      <div className="lg:flex lg:gap-[50px] lg:justify-center">
        <motion.div
          className="job-container-item pb-[30px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={pictureAnimation}
        >
          <Price>
            <div className="md:flex md:flex-col md:justify-around md:items-center lg:flex-col">
              <div className="flex flex-col md:flex-row md:justify-around md:gap-[50px] lg:flex-col">
                <div className="flex flex-col ">
                  <span className="font-bold text-[20px] pb-[2px]">Basic</span>
                  <span className="font-bold text-[40px] pb-[2px]">Free</span>
                  <span className="font-medium text-[20px] pb-[28px] text-titleDescription">
                    Free Plan for all Writers.
                  </span>
                </div>
                <div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                </div>
              </div>
              <Button
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={animation3}
              >
                TRY IT FOR FREE
              </Button>
            </div>
          </Price>
        </motion.div>

        <motion.div
          className="job-container-item pb-[30px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={pictureAnimation}
        >
          <Price className="bg-pricing-background  bg-no-repeat bg-center bg-cover text-white">
            <div className="md:flex md:flex-col md:justify-around md:items-center lg:flex-col">
              <div className="flex flex-col md:flex-row md:justify-around md:gap-[50px] lg:flex-col">
                <div className="flex flex-col ">
                  <span className="font-bold text-[20px] pb-[2px]">Basic</span>
                  <span className="font-bold text-[40px] pb-[2px]">Free</span>
                  <span className="font-medium text-[20px] pb-[28px] text-titleDescription">
                    Free Plan for all Writers.
                  </span>
                </div>
                <div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                </div>
              </div>
              <Button
                className="bg-white hover:bg-transparent hover:text-white"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={animation3}
              >
                TRY IT FOR FREE
              </Button>
            </div>
          </Price>
        </motion.div>

        <motion.div
          className="job-container-item pb-[30px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={pictureAnimation}
        >
          <Price>
            <div className="md:flex md:flex-col md:justify-around md:items-center lg:flex-col">
              <div className="flex flex-col md:flex-row md:justify-around md:gap-[50px] lg:flex-col">
                <div className="flex flex-col ">
                  <span className="font-bold text-[20px] pb-[2px]">Basic</span>
                  <span className="font-bold text-[40px] pb-[2px]">Free</span>
                  <span className="font-medium text-[20px] pb-[28px] text-titleDescription">
                    Free Plan for all Writers.
                  </span>
                </div>
                <div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                  <div className="flex flex-row gap-[10px] pb-[10px] items-center">
                    <FaChevronCircleDown />
                    <span className="font-medium text-[16px]">
                      Free Plan for All Users
                    </span>
                  </div>
                </div>
              </div>
              <Button
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={animation3}
              >
                TRY IT FOR FREE
              </Button>
            </div>
          </Price>
        </motion.div>
      </div>
      <Table />
    </div>
  );
}

export default PriceItem;
