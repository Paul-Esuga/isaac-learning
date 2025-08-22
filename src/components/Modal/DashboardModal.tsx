export default function DashboardModal({ isFormFilled, children }: { isFormFilled: boolean; children: any }) {
  return (
    <div onClick={(e) => e.stopPropagation()} className={`fixed inset-0 flex justify-center items-center transition-colors text-black
    ${isFormFilled ? "visible bg-black/20" : "invisible"}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-warm-white rounded-3xl shadow-[0px_2px_1px_rgba(0,0,0,0.5)] p-6 sm:w-[60%] md:w-[60%] lg:w-[30%] transition-all 
        ${isFormFilled ? "scale-100 opacxity-100" : "scale-125 opacity-0"}`}>
        {children}
      </div>
    </div>
  )
}
