import { Component } from "react";
type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {children}
    </div>
  );
};

export default ContentWrapper;

