import { useState } from "react";
import { Link } from "react-router-dom";

interface ISidebarItemProps {
  title: string;
  items: string[];
}

export const SidebarItem = ({ title, items }: ISidebarItemProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        className={`text-blue-900 p-2 rounded font-bold hover:bg-blue-50 ${
          show && "bg-blue-50"
        }`}
        onClick={() => setShow(!show)}
      >
        {title}
      </button>
      {show && (
        <ul className="p-2 bg-blue-900 rounded text-white">
          {items.map((item) => (
            <li className="flex" key={item}>
              <Link className="hover:bg-blue-950 px-2 rounded w-full" to={item.toLocaleLowerCase()}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
