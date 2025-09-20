import {LuRocket} from "react-icons/lu";

const Button = ({
  variant = "",
  text,
  icon: Icon,
  onClick,
  className = "",
  effect = false,
}) => {
  let style = variant || "bg-[#F26064] text-white";
  const IconComp = Icon || LuRocket;

  return (
    <button
      onClick={onClick}
      className={`
        ${style}
        ${effect ? "group" : ""}
        flex items-center justify-center
        px-6 py-4
        sm:px-[38px] sm:py-[22px]
        rounded-[43px]
        shadow-custom
        opacity-100
        font-montserrat font-medium text-base sm:text-[18px] leading-[100%] tracking-[0]
        transition-all duration-300
        overflow-hidden
        ${className}
        ${effect ? "hover:pr-4 sm:hover:pr-[16px]" : ""}
      `}
      style={{minWidth: "fit-content"}}
    >
      {/* Icon on left (hidden by default, shown on hover) */}
      <span
        className={`
          flex items-center
          transition-all duration-300
          mr-2
          ${
            effect
              ? "opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
              : "opacity-0"
          }
        `}
        style={{position: "relative"}}
      >
        <IconComp size={16} />
      </span>
      {/* Text */}
      <span
        className={`
          transition-all duration-300
        `}
      >
        {text}
      </span>
      {/* Icon on right (shown by default, hidden on hover) */}
      <span
        className={`
          flex items-center
          transition-all duration-300
          ml-2
          ${
            effect
              ? "opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-3"
              : "opacity-100 translate-x-0"
          }
        `}
        style={{position: "relative"}}
      >
        <IconComp size={16} />
      </span>
    </button>
  );
};

export default Button;
