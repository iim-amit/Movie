import React from "react";

const HeaderList = ({ name, Icon }) => {
  return (
    <div
      className="text-white flex items-center gap-3
      text-[15px] font-semibold cursor-pointer hover:underline
      underline-offset-8 mb-2"
    >
      {Icon && <Icon />} 
      <h2>{name}</h2>
    </div>
  );
};

export default HeaderList;
