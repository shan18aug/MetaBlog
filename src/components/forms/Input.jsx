import React from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="inline-block mb-2">{label}</label>}

        <input
          ref={ref}
          type={type}
          className={`w-full px-3 py-2 border rounded-lg outline-none ${className}`}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
