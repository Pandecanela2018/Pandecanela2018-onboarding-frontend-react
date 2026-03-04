function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95 active:bg-indigo-800 ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
