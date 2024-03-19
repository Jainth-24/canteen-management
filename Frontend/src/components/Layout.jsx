import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-10 py-8">{children}</main>
    </div>
  );
};

export default Layout;
