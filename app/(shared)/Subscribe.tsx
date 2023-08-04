import React from "react";

const Subscribe = () => {
  return (
    <div className="text-center bg-accent-blue px-5 py-10">
      <h4 className="font-semibold text-base text-wh-100 mb-3">
        Subscribe to my newsletter
      </h4>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter your email address"
      />
      <button className="bg-accent-orange text-wh-900 font-semibold w-5/6 min-w-[100px] py-2 px-3 mt-3">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;
