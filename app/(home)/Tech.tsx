import React from "react";
import Card from "app/(shared)/Card";

type Props = {};

const Tech = (props: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          Tech
        </h4>
        <p className="font-bold text-2xl">Accessibility</p>
      </div>
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        <Card
          className="bg-wh-500 col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm={true}
        />
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="H-48"
          isLongForm
        />
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="H-48"
          isLongForm
        />
        <Card
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="H-48"
          isLongForm
        />
      </div>
    </section>
  );
};

export default Tech;
