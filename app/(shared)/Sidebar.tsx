import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-accent-orange py-3 px-5 text-wh-900 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      {/* <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div> */}
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          width={500}
          height={1000}
          src={Ad2}
          alt="advert-2"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Sidebar;
