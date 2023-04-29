import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Not for everyone</h4>
          <p className="my-5">
            Districts of Not for everyone is space for private thoughts and
            personal life.
          </p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">link</p>
          <p className="my-5">link</p>
          <p>random text</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
