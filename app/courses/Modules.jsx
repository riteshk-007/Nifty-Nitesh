import { FaCaretRight } from "react-icons/fa";
function ModuleBox({ moduleNumber, list }) {
  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-lg w-full max-w-md mx-auto mt-5 relative">
      <div className="bg-gradient-to-l from-indigo-700 via-violet-600 to-violet-700 text-white p-3 rounded-lg  absolute -top-4 left-0 sm:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <p className="text-lg font-bold ">Session {moduleNumber}</p>
      </div>
      <ul className="space-y-4 mt-5">
        {list.map((item, i) => (
          <li key={i} className="flex items-center justify-start">
            <FaCaretRight
              fontSize={12}
              className="text-green-500 mx-2 dark:text-green-400"
            />
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 overflow-auto break-words">
              {item.tag}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleBox;
