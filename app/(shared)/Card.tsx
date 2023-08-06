import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@prisma/client";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  post: Post;
};

function Card({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
  post,
}: Props) {
  const { id, title, author, createdAt, image, snippet } = post || {};
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        href={`.../post/${post?.id}`}
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            fill
            sizes="(min-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
            src={image}
            alt="thoughts"
            placeholder="blur"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="basis-full">
        <Link href={`.../post/${post?.id}`}>
          <h4
            className={`font-bold hover:text-accent-green text-wh-50
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            {title}
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs text-wh-100">{author}</h5>
          <h6 className="text-wh-100 text-xs">{formattedDate}</h6>
        </div>
        <p
          className={`text-wh-100 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {snippet}
        </p>
      </div>
    </div>
  );
}

export default Card;
