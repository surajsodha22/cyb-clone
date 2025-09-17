// Input.jsx
import React from "react";

const Input = ({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div
      className={`flex gap-2 border border-gray-300 max-w-96 mx-auto items-center rounded-lg px-3 py-2 bg-white ${className} `}
    >
      {Icon && (
        <span className="text-gray-600">
          <Icon />
        </span>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="outline-none border-none bg-transparent w-full text-sm"
      />
    </div>
  );
};

export default Input;
