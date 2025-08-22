import FoundationalIcon from "../assets/images/dashboard-images/foundational-logo.png";
import SecondaryIcon from "../assets/images/dashboard-images/secondary-logo.png";
import TertiaryIcon from "../assets/images/dashboard-images/tertiary-logo.png";
import MostlyFullBar from "../assets/images/dashboard-images/mostly-full-bar.png";
import HalfFullBar from "../assets/images/dashboard-images/half-full-bar.png";
import EmptyBar from "../assets/images/dashboard-images/empty-bar.png";

const DashboardLevels = [
  {
    borderColor: "#00A36C",
    icon: FoundationalIcon,
    name: "Foundational",
    completion: "4 of 6 completed",
    bar: MostlyFullBar,
  },
  {
    borderColor: "#5dbcf3",
    icon: SecondaryIcon,
    name: "Secondary",
    completion: "2 of 4 completed",
    bar: HalfFullBar,
  },
  {
    borderColor: "#FFD700",
    icon: TertiaryIcon,
    name: "Tertiary",
    completion: "Complete secondary level to start",
    bar: EmptyBar,
  },
];

export default DashboardLevels;
