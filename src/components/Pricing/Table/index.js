import { FaCheck } from "react-icons/fa";

function Table(){
    return(
        <div>
            <div className="table-container" aria-label="Destinations">
        <div className="flex-table p-[7px]">
          <div className="flex-row font-black text-[20px] ">
            Usage
          </div>
          <div className="flex-row-title font-black text-[14px] text-titleColor md:text-black ">Basic</div>
          <div className="flex-row-title font-black text-[14px] text-gray md:text-black">Pro</div>
          <div className="flex-row-title font-black text-[14px] text-gray md:text-black">Team</div>
        </div>
        <div className="flex-table pt-[17px] pb-[17px]">
          <div className="pr-[98px] text-[14px] font-medium">
           Subscribes
          </div>
          <div className="flex-row text-titleColor font-[100]">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor hidden md:block">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor hidden md:block">
            <FaCheck />
          </div>
        </div>
        <div className="flex-table row pt-[17px] pb-[17px]">
          <div className="flex-row first font-medium text-[14px]">
             Custom Domain
          </div>
          <div className="flex-row"></div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
        </div>
        <div className="flex-table row pt-[17px] pb-[17px]">
          <div className="flex-row first text-[14px] font-medium pr-[98px]">
             Collaborators
          </div>
          <div className="flex-row text-titleColor">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
        </div>
        <div className="flex-table row pt-[17px] pb-[17px]">
          <div className="flex-row first font-medium text-[14px] pr-[78px]">
            Articles
          </div>
          <div className="flex-row font-medium text-[14px] text-titleColor">
            Unlimited
          </div>
          <div className="flex-row font-medium text-[14px] text-titleColor opacity-0 md:opacity-100">
            Unlimited
          </div>
          <div className="flex-row font-medium text-[14px] text-titleColor opacity-0 md:opacity-100">
            Unlimited
          </div>
        </div>
        <div className="flex-table row pt-[17px] pb-[17px]">
          <div className="flex-row first font-medium text-[14px] pr-[98px]">
            Integrations
          </div>
          <div className="flex-row text-titleColor font-black">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
        </div>
        <div className="flex-table row pt-[17px] pb-[17px]">
          <div className="flex-row first font-medium text-[14px] pr-[98px]">
           Assets Storage
          </div>
          <div className="flex-row text-titleColor">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
        </div>
        <div className="flex-table row pt-[17px] pb-[17px]">
          <div className="flex-row first font-medium text-[14px]">
           Custom Theme
          </div>
          <div className="flex-row"></div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
          <div className="flex-row text-titleColor opacity-0  md:opacity-100">
            <FaCheck />
          </div>
        </div>
        <div className="border-none flex-table  pt-[17px] pb-[17px]">
          <div className="flex-row border-none font-medium text-[14px]">
           Multi Colabration
          </div>
          <div className="flex-row"></div>
          <div className="flex-row"></div>
          <div className="flex-row text-titleColor opacity-0 md:opacity-100">
            <FaCheck />
          </div>
        </div>
      </div>
        </div>

    )
}

export default Table;