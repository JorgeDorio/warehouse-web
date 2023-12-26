import { ReactNode } from "react";

interface IContainerProp {
  children?: ReactNode;
  title: string;
}

export const Container = ({ children, title }: IContainerProp) => {
  return (
    <div className="border border-blue-200 shadow rounded">
      <h1 className="bg-blue-200 p-2 rounded text-blue-900 font-bold">
        {title}
      </h1>
      <div className="p-2">{children}</div>
    </div>
  );
};
