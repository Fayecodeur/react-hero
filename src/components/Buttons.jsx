export default function Buttons({ children, color }) {
  return (
    <button
      className={`py-2 px-4 ${color} rounded-full text-white font-bold text-center hover:${color}-700`}
    >
      {children}
    </button>
  );
}
