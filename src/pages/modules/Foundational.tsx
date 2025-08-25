import Modules from "../../static-data/LearningModules"
import ModuleCard from "../../components/modules/ModuleCard"

function Foundational() {
  return (
    <div className='px-6'>
      {
        Modules.map((mod, key) =>
          <ModuleCard key={key} border={'#00A36C'} title={mod.title} description={mod.description} progress={mod.progress} started={mod.started} />
        )
      }
    </div>
  )
}

export default Foundational
