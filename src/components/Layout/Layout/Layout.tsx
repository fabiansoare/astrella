import Header from "../Header/Header";
import { FC } from "react";
import LayoutProps from "./LayoutProps.interface";

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Header title={title} description={description} />
      {children}
    </>
  );
};

export default Layout;
