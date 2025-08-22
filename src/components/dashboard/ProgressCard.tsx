import progressBar1 from '../../assets/images/dashboard-images/progress-bar1.png'

export type ProgCard = {
  title: string,
  timing: string,
  bar: number,
}

function ProgressCard({ title, timing, bar }: ProgCard) {
  return (
    <>
      <div className="bg-white rounded-[10px] p-2.5 text-left  shadow-[0_0_4px_1px_rgba(137, 182, 194, 0.1)] mb-3 shadow">
        <div className="flex justify-between">
          <p className="font-bold text-base text-slate-gray">{title}</p>
          <p className="font-normal text-sm text-medium-emerald opacity-60">{String(bar)}%</p>
        </div>
        <div className='h-[10px] my-2 w-full bg-[#2ECC71]/18 rounded-[20px]'>
          <div className='w-[50%] transition-all h-full bg-[#2ECC71] rounded-[20px]' style={{ width: `${bar}%` }}></div>
        </div>
        <p className="font-normal text-sm text-sub-gray">{timing}</p>
      </div>
    </>
  )
}

export default ProgressCard