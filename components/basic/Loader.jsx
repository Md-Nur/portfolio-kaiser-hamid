import React from "react";

const Loader = () => {
  return (
    <div className="h-screen m-10 my-10 lg:mx-auto md:w-[90vw] lg:w-[85vw] xl:w-[75vw] 2xl:w-[80vw]">
      <div className="w-96 animate-pulse bg-slate-500 h-12 mx-auto mb-5 rounded-xl "></div>
      <div className="animate-pulse bg-slate-500 h-1/2 my-5 rounded-xl "></div>
      <div className="w-96 animate-pulse bg-slate-500 h-12 mx-auto my-10 rounded-xl "></div>
      <div className="animate-pulse bg-slate-500 h-1/2 my-5 rounded-xl "></div>
    </div>
  );
};

export default Loader;
