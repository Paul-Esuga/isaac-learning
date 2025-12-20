import type { ReactNode } from "react";

interface DashboardModalProps {
  isFormFilled: boolean;
  children: ReactNode;
}

export default function DashboardModal({
  isFormFilled,
  children,
}: DashboardModalProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-[2000] transition-all duration-300 px-4
      ${
        isFormFilled
          ? "visible bg-black/50 backdrop-blur-sm"
          : "invisible bg-transparent"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-[500px] transition-all duration-300
        ${isFormFilled ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
