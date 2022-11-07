import React from "react";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className="h-[96vh] w-[96vw] sm:w-[48vw] flex items-center justify-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
      {children}
    </div>
  );
}

export default Container;
