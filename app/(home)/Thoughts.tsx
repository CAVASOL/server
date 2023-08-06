import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@prisma/client";

type ThoughtsCardProps = {
  className?: string;
  post: Post;
};

const ThoughtsCard = ({ className, post }: ThoughtsCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          sizes="(min-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
          src={post?.image}
          alt="thoughts"
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  thoughtsPosts: Array<Post>;
};

const Thoughts = ({ thoughtsPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          Thoughts
        </div>
        <p className="text-sm">you're something wild</p>
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <ThoughtsCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={thoughtsPosts[0]}
        />
        <ThoughtsCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={thoughtsPosts[1]}
        />
        <ThoughtsCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={thoughtsPosts[2]}
        />
        <ThoughtsCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={thoughtsPosts[3]}
        />
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
