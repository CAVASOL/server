import React from "react";
import Image from "next/image";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
      <div className="basis-2/3 md:mt-3">
        <h1 className="text-xl text-wh-50 md:text-5xl">I'm working on</h1>
      </div>
    </div>
  );
};

export default About;
