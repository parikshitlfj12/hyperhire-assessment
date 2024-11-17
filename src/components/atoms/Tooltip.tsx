import { TooltipProps } from "./interface";

export default function Tooltip({ text, icon = "💵" }: TooltipProps) {
  return (
    <div className="relative flex justify-center items-center mb-8">
      <div className="bg-[#E6FAF5] text-[#1EBC9C] font-semibold px-3 py-2 rounded-lg shadow-lg flex items-center">
        <div className="text-[#1EBC9C] mr-2 flex items-center justify-center">
          <span className="text-lg">{icon}</span>
        </div>
        <span className="text-md font-bold">{text}</span>
      </div>
      {/* Tooltip arrow */}
      <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E6FAF5] rotate-45 shadow-md"></div>
    </div>
  );
}
