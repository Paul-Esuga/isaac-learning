import Modules from "../../static-data/LearningModules.ts";
import ModuleCard from "../../components/modules/ModuleCard";
import { Outlet, useNavigate } from "react-router-dom";

function Tertiary() {
  const navigate = useNavigate();
  return (
    <div className="px-1">
      {/* CHANGE: Added a responsive grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Modules.map((mod, key) => (
          <div
            key={key}
            onClick={() => {
              navigate(`/dashboard/modules/view-module/${key}`);
            }}
            className="cursor-pointer transition-transform hover:scale-[1.02] active:scale-95"
          >
            <ModuleCard
              key={key}
              border={"#CCAC00"}
              title={mod.title}
              description={mod.description}
              progress={mod.progress}
              started={mod.started}
            />
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Tertiary;
