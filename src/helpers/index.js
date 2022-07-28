export const footerInfo = ["Products", "Pricing", "Blog"];

export const footerContact = ["Visit", "Call", "Email"];

export const footerSupport = ["Help", "Status", "FAQ"];

export const footerSNews = ["Sign Up", "Twitter", "Linkedin"];

export const footerItem = [
  "© Anomaly. All right reserved.",
  "Template by Cédric",
  "Get this Template customized",
];

export const getLists = (arr) =>
  arr.map((item) => (
    <li
      className="md:mb-[8px] text-[22px] font-medium lg:text-[28px]"
      key={item}
    >
      {item}
    </li>
  ));

export const getListsFooter = (arr) =>
  arr.map((item) => (
    <div
      className="pb-[13px] 
    font-medium"
      key={item}
    >
      {item}
    </div>
  ));
