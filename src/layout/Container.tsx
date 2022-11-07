import React from "react";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className="bg-green-500 h-[96vh] w-[48vw] flex items-center justify-center border ">
      {children}
    </div>
  );
}

export default Container;
