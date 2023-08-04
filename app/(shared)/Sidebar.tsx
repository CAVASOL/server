import React from "react";
import Image from "next/image";
import Subscribe from "./Subscribe";
import Ad from "/public/assets/ad.jpeg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      {/* <h4 className="bg-accent-orange py-3 px-5 text-wh-900 text-xs font-bold text-center">
        Subscribe and Follow
      </h4> */}
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          width={500}
          height={1000}
          src={Ad}
          alt="advert-2"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Sidebar;
