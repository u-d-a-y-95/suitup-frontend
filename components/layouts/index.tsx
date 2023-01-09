import { FC, ReactNode } from "react";
import Nav from "./nav";

interface ILayout {
  children: ReactNode;
}

const Layouts: FC<ILayout> = ({ children }: ILayout) => {
  return (
    <div className="">
      <Nav />
      <div className="container mx-auto p-4 sm:p-0">{children}</div>
    </div>
  );
};

export default Layouts;
