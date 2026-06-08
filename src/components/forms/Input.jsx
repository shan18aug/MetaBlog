function Input({ label, type = "text", className = "", ...props }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-2">{label}</label>}

      <input
        type={type}
        className={`w-full px-3 py-2 border rounded-lg outline-none focus:ring ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
