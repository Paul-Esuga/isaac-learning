type ModuleCardType = {
  key: number;
  border: string;
  title: string;
  description: string;
  progress: number;
  started: boolean;
};


function ModuleCard({ key, border, title, description, progress, started }: ModuleCardType) {
  return (
    <div key={key} className={`bg-white border-t-3 px-2.5 py-5 rounded-[20px] mb-4 w-[98%]`} style={{ borderColor: border }}>
      <div className='justify-start gap-8 mb-4'>
        <h3 className='font-bold text-[18px]/7 self-baseline text-slate-gray'>{title}</h3>
        <div className=''>
          <p className='text-sub-gray font-medium text-base/5 my-4'>{description}</p>
        </div>
        <div>
          <div className='h-[10px] my-2 w-full bg-[#2ECC71]/18 rounded-[20px]'>
            <div className='w-[50%] transition-all h-full bg-[#2ECC71] rounded-[20px]' style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
      <div className='mb-2 cursor-pointer'>
        {!started ?
          <div className='bg-[#F5F5F5] text-slate-gray  text-center font-normal text-base/5 p-2.5 rounded-[10px] w-full min-h-[44px]'>Start Learning</div>
          :
          <div className='bg-primary-green text-warm-white text-center p-2.5 text-base/5 font-bold rounded-[10px] w-full min-[44px]'>Continue Learning</div>
        }
      </div>
    </div>
  )
}

export default ModuleCard