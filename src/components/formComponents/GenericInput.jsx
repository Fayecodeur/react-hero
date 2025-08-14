export default function GenericInput({ constante, callback, title, type }) {
  return (
    <div>
      <label htmlFor={constante} className="block mb-2">
        {title}
      </label>
      <input
        value={constante}
        onChange={(e) => callback(e.target.value)}
        type={type}
        id={constante}
        className="border border-gray-500 w-full px-3 py-1 rounded-md"
      />
    </div>
  );
}
