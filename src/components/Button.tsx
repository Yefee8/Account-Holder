export default function Button({ ...props }) {
  const { children } = props;

  return (
    <button
      {...props}
      className="disabled:cursor-not-allowed disabled:opacity-50 bg-indigo-500 duration-100 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
}
