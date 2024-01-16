import React from "react";

const Ribbon = () => {
  return (
    <div class="absolute left-0 top-0  overflow-hidden w-56 h-56 bg-transparent">
      <div class="absolute left-0 top-0 h-16 w-16">
        <div class="bg-indigo-700 absolute transform -rotate-45 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
          Popular
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
