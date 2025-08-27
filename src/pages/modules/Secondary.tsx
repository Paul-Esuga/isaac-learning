import Modules from "../../static-data/LearningModules"
import ModuleCard from "../../components/modules/ModuleCard"
import { Outlet, useNavigate } from "react-router-dom"

function Secondary() {
  const navigate = useNavigate()
  return (
    <div className='px-6'>
      {
        Modules.map((mod, key) =>
          <div
            onClick={() => {
              navigate(`../../modules/view-module/${key}`)
            }}
          >            <ModuleCard key={key} border={'#5DADE2'} title={mod.title} description={mod.description} progress={mod.progress} started={mod.started} />
          </div>
        )
      }
      <Outlet />
    </div>
  )
}

export default Secondary