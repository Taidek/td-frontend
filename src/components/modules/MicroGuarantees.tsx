import { GUARANTEES } from "@/constants/guaranteeConstants";

export default function MicroGuarantees() {
  return (
    <div className="mt-4 flex items-center gap-[7px]">
      {GUARANTEES.map((guarantee) => (
        <div key={guarantee.text} className="flex items-center gap-2.5 p-2.5">
          <guarantee.icon
            className={`${guarantee.iconSize} ${guarantee.iconColor}`}
          />
          <span className="font-sans text-[15px] font-normal text-white">
            {guarantee.text}
          </span>
        </div>
      ))}
    </div>
  );
}
