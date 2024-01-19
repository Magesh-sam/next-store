import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="group flex flex-wrap items-center justify-between gap-2 bg-primary px-5 py-3">
      <p className=" text-white">© 2024 Next Store. All rights reserved.</p>
      <div className="flex items-center gap-2 text-white hover:text-gray-200">
        <p className=" ">made with ❤️ and ☕ by</p>
        <Link
          className="underline-offset-4 group-hover:underline"
          href="https://github.com/Magesh-sam"
          target="_blank"
        >
          Mageshkannan
        </Link>
      </div>
      <nav className="flex gap-4  ">
        <Link
          className="text-sm underline-offset-4 hover:underline"
          href="mailto:mageshkannanam@gmail.com"
          target="_blank"
        >
          Contact
        </Link>
        <Link
          className="text-sm underline-offset-4 hover:underline"
          href="https://github.com/Magesh-sam/next-store"
          target="_blank"
        >
          Github
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
