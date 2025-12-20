import Levels from "../../static-data/DashboardLevels";
import Modules from "../../static-data/DashboardModules";

function LearningModules() {
  return (
    <div className="mt-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-slate-gray font-semibold text-xl">
          Learning modules
        </h2>
        <h3 className="text-primary-green font-bold text-sm md:text-base cursor-pointer hover:underline">
          View all modules
        </h3>
      </div>

      {/* Levels Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {Levels.map((level, i) => (
          <div
            key={i}
            className="bg-white border-t-4 p-5 rounded-[20px] shadow-sm"
            style={{ borderColor: level.borderColor }}
          >
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-full flex items-center justify-center">
                <img src={level.icon} alt={level.name} className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-slate-gray">{level.name} level</p>
                <p className="text-sub-gray text-xs">{level.completion}</p>
              </div>
            </div>
            <img src={level.bar} className="w-full" alt="progress" />
          </div>
        ))}
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {" "}
        {Modules.map((mod, key) => (
          <div
            key={key}
            className="bg-white border-t-4 p-5 rounded-[20px] shadow-sm flex flex-col justify-between"
            style={{ borderColor: mod.level.borderColor }}
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-bold text-slate-gray leading-tight">
                  {mod.name}
                </h3>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold whitespace-nowrap ${
                    mod.level.name === "Foundational"
                      ? "bg-green-100"
                      : "bg-blue-100"
                  }`}
                  style={{ color: mod.level.borderColor }}
                >
                  {mod.level.name}
                </span>
              </div>
              <div className="flex gap-2 mb-3">
                <img src={mod.status} className="h-5" alt="status" />
                <img src={mod.badges} className="h-5" alt="badge" />
              </div>
              <p className="text-sub-gray text-xs mb-4">{mod.timing}</p>
              <img src={mod.bar} className="w-full mb-6" alt="progress" />
            </div>
            <button
              className={`w-full py-3 rounded-xl font-bold transition-transform active:scale-95 ${
                key < 2
                  ? "bg-gray-100 text-slate-gray"
                  : "bg-primary-green text-white"
              }`}
            >
              {mod.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningModules;
