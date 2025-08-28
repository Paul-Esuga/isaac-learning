import Modules from "../../static-data/LearningModules.ts"
import ModuleCard from "../../components/modules/ModuleCard"
import { Outlet, useNavigate } from "react-router-dom"

function Foundational() {
  const navigate = useNavigate()

  return (
    <div className='px-1'>
      {
        Modules.map((mod, key) =>
          <div
            onClick={() => {
              navigate(`/dashboard/modules/view-module/${key}`)
            }}
            className="cursor-pointer"
          >
            <ModuleCard key={key} border={'#00A36C'} title={mod.title} description={mod.description} progress={mod.progress} started={mod.started} />
          </div>
        )
      }
      <Outlet />
    </div>
  )
}

export default Foundational
