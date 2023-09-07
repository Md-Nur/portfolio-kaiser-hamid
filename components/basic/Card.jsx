import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-color3 dark:bg-color2 rounded-md p-3 xl:p-6 lg:m-3 shadow-md w-full">
      {children}
    </div>
  );
};

export default Card;
