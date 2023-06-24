import IconRevenue from "../icons/revenue";
import IconTotalUsers from "../icons/doubleusers";
import IconLike from "../icons/like";
import IconTransaction from "../icons/transaction_icon";

const mockData = [
  {
    icon: <IconRevenue height={24} width={26} />,
    cardText: "Total Revenues",
    value: "$2,129,430",
    className:"w-[250px] h-[140px] rounded-xl p-[20px] bg-[#DDEFE0]"
  },

  {
    icon:  <IconTransaction height={25} width={18} className="fill-[#000000]"/>,
    cardText: "Total Transactions",
    value: "1520",
    className:"w-[250px] h-[140px] rounded-xl p-[20px] bg-[#F4ECDD]"
  },

  {
    icon: <IconLike height={24} width={26} />,
    cardText: "Total Likes",
    value: "9,721",
    className:"w-[250px] h-[140px] rounded-xl p-[20px] bg-[#EFDADA]"
  },

  {
    icon: <IconTotalUsers height={24} width={36} />,
    cardText: "Total Users",
    value: "892",
    className:"w-[250px] h-[140px] rounded-xl p-[20px] bg-[#DEE0EF]"
  },

];

export default mockData;
