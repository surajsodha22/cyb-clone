import {LuRocket} from "react-icons/lu";

const Button = ({variant = "", text, icon: Icon, onClick, className = ""}) => {
  let style = variant || "bg-[#F26064] text-white";

  return (
    <button
      onClick={onClick}
      className={`
        ${style} 
        flex items-center justify-center gap-[10px]
        px-[38px] py-[22px]
        rounded-[43px]
        shadow-custom
        opacity-100
        font-montserrat font-medium text-[18px] leading-[100%] tracking-[0]
        ${className}
      `}
    >
      {text} {(Icon && <Icon size={16} />) || <LuRocket size={16} />}
    </button>
  );
};

export default Button;
