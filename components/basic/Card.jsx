import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-base-200 rounded-md p-3 xl:p-6 lg:m-3 shadow-md w-full">
      {children}
    </div>
  );
};

export default Card;
