import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5 bg-accent-blue">
      <nav className="flex justify-between items-center w-full text-wh-50 px-10 py-4">
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl text-wh-50 md:text-5xl">
            Knot for everyone
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
