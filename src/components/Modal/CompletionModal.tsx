import type { ReactNode } from "react";

export default function Modal({
  isFormFilled,
  children,
}: {
  isFormFilled: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-300 px-4
      ${
        isFormFilled
          ? "visible bg-black/60 backdrop-blur-sm"
          : "invisible bg-transparent"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-[450px] transition-all duration-300
        ${isFormFilled ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
