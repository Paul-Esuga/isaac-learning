import FullBar from "../assets/images/dashboard-images/full-bar.png";
import MostlyFullBar from "../assets/images/dashboard-images/mostly-full-bar.png";
import HalfFullBar from "../assets/images/dashboard-images/half-full-bar.png";
import EmptyBar from "../assets/images/dashboard-images/empty-bar.png";
import FComplete from "../assets/images/dashboard-images/foundational-complete.png";
import SComplete from "../assets/images/dashboard-images/secondary-complete.png";
import InProgress from "../assets/images/dashboard-images/in-progress.png";
import NotStart from "../assets/images/dashboard-images/not-started.png";
import Badges3 from "../assets/images/dashboard-images/3-badges.png";
import Badges2 from "../assets/images/dashboard-images/2-badges.png";
import Badges1 from "../assets/images/dashboard-images/1-badges.png";
import Locked2 from "../assets/images/dashboard-images/2-locked.png";
import Available4 from "../assets/images/dashboard-images/4-available.png";
import Available3 from "../assets/images/dashboard-images/3-available.png";
import Levels from "./DashboardLevels";

const DashboardModules = [
  {
    name: "Recruitment fundamentals",
    level: Levels[0],
    status: FComplete,
    badges: Badges3,
    timing: "Last accessed: May 18, 2025",
    bar: FullBar,
    button: "Review module",
  },
  {
    name: "The evolving workforce",
    level: Levels[1],
    status: SComplete,
    badges: Badges2,
    timing: "Last accessed: May 18, 2025",
    bar: FullBar,
    button: "Review module",
  },
  {
    name: "Recruitment fundamentals",
    level: Levels[0],
    status: InProgress,
    badges: Badges1,
    timing: "Last accessed: Today",
    bar: MostlyFullBar,
    button: "Continue learning",
  },
  {
    name: "HR analytics",
    level: Levels[0],
    status: SComplete,
    badges: Locked2,
    timing: "Due: June 24, 2025",
    bar: HalfFullBar,
    button: "Continue learning",
  },
  {
    name: "Nigerian Labor Law",
    level: Levels[2],
    status: NotStart,
    badges: Available4,
    timing: "Due: June 24, 2025",
    bar: EmptyBar,
    button: "Start module",
  },
  {
    name: "Performance management",
    level: Levels[2],
    status: NotStart,
    badges: Available3,
    timing: "Due: June 24, 2025",
    bar: EmptyBar,
    button: "Start module",
  },
];

export default DashboardModules;
