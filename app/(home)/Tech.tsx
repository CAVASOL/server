import React from "react";
import Card from "app/(shared)/Card";
import { Post } from "@prisma/client";

type Props = {
  techPosts: Array<Post>;
};

const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          Tech
        </h4>
        <p className="font-bold text-2xl text-wh-50">AI & Accessibility</p>
      </div>
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm
          post={techPosts[0]}
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isLongForm
          post={techPosts[1]}
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isLongForm
          post={techPosts[2]}
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isLongForm
          post={techPosts[3]}
        />
      </div>
    </section>
  );
};

export default Tech;
