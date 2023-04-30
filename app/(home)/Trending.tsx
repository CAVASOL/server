import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex item-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold ">
          Trending
        </div>
        <p className="text-sm">
          Hair pitch black like the midnight, sky Eyes like the jungle, you're
          something wild
        </p>
      </div>
      <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex flex-col basis-1/2 h-96 gap-3">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
