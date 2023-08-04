import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-accent-blue text-wh-50 py-8 px-8">
      <div className="justify-between mx-auto gap-16 sm:flex">
        <div className="mt-8 basis-1/2 sm:mt-0">
          <h2 className="font-bold text-xl">Knot for everyone</h2>
          <p className="my-5">
            District of Knot for everyone is space for private thoughts
          </p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h2 className="font-bold text-xl">Links</h2>
          <div className="flex items-center gap-10 my-5">
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
