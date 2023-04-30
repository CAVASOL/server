import React from "react";
import Link from "next/link";

type ThoughtsCardProps = {
  className?: string;
};

const ThoughtsCard = ({ className }: ThoughtsCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_BASE_URL}/post/${post?.id}`}
      href="/"
    >
      <div className="z-0 relative w-full h-full bg-wh-500">Image</div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          Episode
        </h4>
        <div className="text-wh-100 mt-2">Post title</div>
      </div>
    </Link>
  );
};

type Props = {};

const Thoughts = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex item-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          Thoughts
        </div>
        <p className="text-sm">
          Hair pitch black like the midnight, sky Eyes like the jungle, you're
          something wild
        </p>
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <ThoughtsCard className="col-span-2 row-span-2 bg-wh-500" />
        <ThoughtsCard className="col-span-2 row-span-1 bg-wh-500" />
        <ThoughtsCard className="col-span-1 row-span-1 bg-wh-500" />
        <ThoughtsCard className="col-span-1 row-span-1 bg-wh-500" />
      </div>
      <p className="text-sm">
        When I open my eyes, I can't hear your voice I can't see your smile I
        have no choice but to close my eyes tight 'Til I know it's for sure, you
        been there all along right where you belong.
      </p>
    </section>
  );
};

export default Thoughts;
